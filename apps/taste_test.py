from bokeh.plotting import figure, show
from bokeh.themes import Theme as _BkTheme
import seaborn as sns
import bokeh
from bokeh.transform import factor_cmap, factor_mark
import panel as pn
import param
import numpy as np


class TasteTest(param.Parameterized):
    acc = param.Number(default=0.5, bounds=(0, 1), step=0.01, label='True Accuracy')
    n = param.Integer(readonly=True, default=10, precedence=-1)
    n_rows = param.Integer(readonly=True, default=2, precedence=-1)
    obs = param.List(default=[0 for _ in range(10)], precedence=-1)

    def __init__(self):
        super().__init__()
        self.sample()

    @pn.depends('acc')
    def sample(self):
        self.obs = list(np.random.rand(self.n) < self.acc)

    @pn.depends('n', 'n_rows', 'obs')
    def plot(self):
        n_cols = np.ceil(self.n / self.n_rows)
        p = figure(title=f"{np.sum(self.obs)} / {self.n} Correct", sizing_mode='scale_both',
                   x_range=(-0.5, n_cols - 0.5),
                   y_range=(-1, self.n_rows))

        ii = np.arange(self.n)
        xx = ii // self.n_rows
        yy = ii % self.n_rows
        bgs = np.where(self.obs, '#859900', 'black')
        fgs = np.where(self.obs, 'white', 'white')
        texts = np.where(self.obs, '\u2713', '\u2715')

        p.circle(x=xx, y=yy, color=bgs, radius=0.2, radius_units='data')
        p.text(x=xx, y=yy, text_color=fgs, text=texts, text_baseline='middle',
               text_align='center', text_font_size='25px')

        p.xaxis.visible = False
        p.yaxis.visible = False

        p.toolbar_location = None
        font = "myriad-pro-semi-condensed"
        text_color = '#777777'
        p.border_fill_alpha = 0
        p.background_fill_alpha = 0
        p.axis.axis_label_text_color = text_color
        p.legend.title_text_color = text_color
        p.legend.label_text_color = text_color
        p.axis.major_label_text_color = text_color
        p.title.text_color = text_color
        p.legend.location = "top_left"
        p.legend.title = "Species"
        p.legend.background_fill_alpha = 0
        p.title_location = "above"
        p.legend.title_text_font = font
        p.legend.title_text_font_style = "bold"
        p.legend.label_text_font_size = '15px'
        p.legend.title_text_font_size = '15px'
        p.legend.label_text_font = font
        p.axis.axis_label_text_font_style = "normal"
        p.axis.axis_label_text_font = font
        p.axis.axis_label_text_font_size = '20px'
        p.axis.major_label_text_font = font
        p.axis.major_label_text_font_size = '15px'
        p.title.text_font = font
        p.title.text_font_style = 'normal'
        p.title.text_font_size = "20px"
        p.grid.grid_line_alpha = 0
        p.axis.major_tick_line_alpha = 0
        p.axis.minor_tick_line_alpha = 0

        return pn.pane.Bokeh(p)

# class SpectrumTemplate(pn.template.base.BasicTemplate):
#     _template = pathlib.Path("/home/nicholas/programs/rho/themes/panel/template.html")
#     _nb_template = pathlib.Path("/home/nicholas/programs/rho/themes/panel/template.html")
#     _resources = {
#         'css': {
#             'spectrum': 'https://unpkg.com/@adobe/spectrum-css@3.0.0/dist/vars/spectrum-global.css'
#         }
#     }


# class SpectrumTheme(pn.template.DefaultTheme):
#     _template = SpectrumTemplate
#     base_css = param.Filename(default="/home/nicholas/programs/rho/themes/panel/spectrum.css")
#     bokeh_theme = param.ClassSelector(class_=(_BkTheme, str),
#                                       default=_BkTheme(filename="/home/nicholas/programs/rho/themes/panel/spectrum.yml"))


comp = TasteTest()
button = pn.widgets.Button(name='Simulate Results', button_type='primary')
button.on_click(lambda evt: comp.sample())
plot2 = pn.Column(button, comp.param, comp.plot, width=400)
plot2.servable("Taste Test")
