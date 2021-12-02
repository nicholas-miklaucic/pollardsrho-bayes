from bokeh.plotting import figure, show

import seaborn as sns
import bokeh
from bokeh.transform import factor_cmap, factor_mark
import panel as pn
import param
import numpy as np
from scipy import stats

class Binomial(param.Parameterized):
    n = param.Integer(default=10, bounds=(1, 50), step=1, label="Number of Trials")
    p = param.Number(default=0.5, bounds=(0, 1), step=0.01, label="Success Probability")
    
    @pn.depends('n', 'p')
    def plot(self):
        xx = np.arange(0, self.n + 1)
        yy = stats.binom(n=self.n, p=self.p).pmf(xx)
        width = 1
        p = figure(title=f"Binomial Probability Distribution", sizing_mode='scale_both',
                   x_range=(-width, self.n + width),
                   y_range=(0, max(yy) * 1.5))

        p.vbar(x=xx, width=width, bottom=0, top=yy, line_color='white')

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
        return p

binom = Binomial(n=3)
pn.Row(pn.Column(pn.Param(binom.param), binom.plot, width=400), height=500).servable()