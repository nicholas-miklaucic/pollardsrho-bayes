from bokeh.plotting import figure, show

import seaborn as sns
import bokeh
from bokeh.transform import factor_cmap, factor_mark
import panel as pn
import param
import numpy as np
from scipy import stats
import matplotlib as mpl

n_colors = 21
thresholds = np.linspace(0, 1, n_colors)
number_colors = []
for threshold, color in zip(thresholds, sns.color_palette('flare_r', n_colors=n_colors)):
    number_colors.append((threshold, mpl.colors.rgb2hex(color)))


class BetaPosterior(param.Parameterized):
    a = param.Number(default=3, bounds=(0, 20), step=0.01, label="α (Number of Successes)")
    b = param.Number(default=5, bounds=(0, 20), step=0.01, label="β (Number of Failures)")
    p = param.Number(default=0.5, bounds=(0, 1), step=0.01, label='Accuracy Threshold')

    @pn.depends('a', 'b', 'p')
    def answer(self):
        sf = stats.beta.sf(self.p, a=self.a, b=self.b)
        ans = pn.indicators.Number(name='Probability your friend meets or exceeds threshold:', format='{value:.2%}', value=sf, font_size='54pt',
        colors=number_colors)
        return ans
    
    @pn.depends('a', 'b', 'p')
    def plot(self):
        xx = np.linspace(0, 1, 300)
        yy = stats.beta(a=self.a, b=self.b).pdf(xx) 
        p = figure(title=f"Beta Probability Distribution", sizing_mode='scale_both',
        x_range=(-0.1, 1.1), y_range=(-0.1, max(yy) + 0.1))

        p.line(x=xx, y=yy)

        xx_subs = xx[xx >= self.p]
        yy_subs = yy[xx >= self.p]
        p.varea(x=xx_subs, y1=0, y2=yy_subs, fill_alpha=0.5)

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

beta = BetaPosterior(a=9, b=3, p=0.5)
pn.Row(pn.Column(pn.Row(pn.Param(beta.param), beta.plot, height=300), beta.answer, width=600), height=500).servable()