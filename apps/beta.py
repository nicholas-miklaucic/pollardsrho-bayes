from bokeh.plotting import figure, show

import seaborn as sns
import bokeh
from bokeh.transform import factor_cmap, factor_mark
import panel as pn
import param
import numpy as np
from scipy import stats

class Beta(param.Parameterized):
    a = param.Number(default=3, bounds=(0, 20), step=0.01, label="α (Number of Successes)")
    b = param.Number(default=5, bounds=(0, 20), step=0.01, label="β (Number of Failures)")
    
    @pn.depends('a', 'b')
    def plot(self):
        xx = np.linspace(0, 1, 300)
        yy = stats.beta(a=self.a, b=self.b).pdf(xx)     
        p = figure(title=f"Beta Probability Distribution", sizing_mode='scale_both',
        x_range=(-0.1, 1.1), y_range=(-0.1, max(yy) + 0.1))

        p.line(x=xx, y=yy)

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

beta = Beta(a=9, b=3)
pn.Row(pn.Column(pn.Param(beta.param), beta.plot, width=400), height=500).servable()