import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as p,a as l,b as s,d as e,f as i}from"./app-0ee39bd6.js";const m={},r=i('<h2 id="选择题-15-2-30" tabindex="-1"><a class="header-anchor" href="#选择题-15-2-30" aria-hidden="true">#</a> 选择题 15 * 2 = 30</h2><ol><li>数字图像的灰度和空间坐标都是<code>离散</code>的。</li><li>图像灰度量化用6比特编码时，量化等级为<code>64</code>个。</li><li>计算机显示器主要采用<code>RGB</code>彩色模型。</li><li>一幅256*256的图像，若灰度级数为16，则存储它所需的比特数为：<code>256K</code>。</li><li>在彩色RGB系统中，每一个颜色通道图是一幅8bit图像，共能组成<code>2的24次方</code>种颜色。</li><li>关于图像对比度，说法正确的是<code>对比度定义为物体亮度的平均值与背景亮度的比值。</code>。</li><li>在图像数字化过程中，<code>量化等级不足</code>可能会引起伪轮廓现象。</li><li>在图像数字化过程中，说法正确的是<code>以不小于2倍最高频率采样，可以完全恢复信号</code>。</li><li>对于图像I，说法正确的是<code>I(0,0)位于图像的左上角</code>。</li><li>对于一个彩色图像，如果想将其色调改变，一种简单可行的方式是将RGB颜色模式转换成<code>HSI</code>模式。</li></ol><hr><ol><li>在灰度线性变换s=kr+b中，要使输出图像对比度下降，则<code>k&lt;1</code>。</li><li>采用幂次变换进行灰度变换时，当幂次取大于1时，该变换可以改善<code>图像整体偏亮</code>类图像。</li><li><code>多幅图像相加之和求平均</code>方法可以用来消减附加在图像上的随机噪声。</li><li>关于图像缩小处理，说法正确的是<code>图像的缩小是从原始图像中选择合适的像素点，使图像缩小后可以尽量保持原有图像的概貌特征不丢失</code>。</li><li>图像与灰度直方图间的对应关系是<code>多对一</code>。</li><li>算法中属于点处理的是<code>二值化</code>。</li><li>算法中属于图像平滑处理的是<code>中值滤波</code>。</li><li>方差与图像的视觉特性有明显的直接关系,方差越<code>大</code>，图像越清晰。</li><li>算法中属于局部处理的是<code>中值滤波</code>。</li><li>采用二阶导数检测边缘时，边缘位于<code>正负值之间的虚构零点</code>。</li></ol><hr>',5),d=l("ol",null,[l("li",null,[s("在SIFT特征提取算法中，高斯差分金字塔中每一组的图像数s取"),l("code",null,"3"),s("时能找到最大稳定兴趣点。")]),l("li",null,[s("边缘检测算子中，抗噪效果最好的是"),l("code",null,"Canny"),s("。")]),l("li",null,[l("code",null,"冗余性"),s("不是特征点的选择原则。")]),l("li",null,[s("OpenCV用于实现截断阈值处理的参数是"),l("code",null,"THRESH_TRUNC"),s("。")]),l("li",null,[s("调用OpenCV中的drawMatches()函数绘制关键点时，如果不绘制单个关键点，应使用的参数是"),l("code",null,"DrawMatchesFlags_NOT_DRAW_SINGLE_POINTS"),s("。")]),l("li",null,[s("下列选项中，可返回2维直方图的OpenCV函数是（ "),l("code",null,"CalcHist()"),s(" ）")]),l("li",null,[s("SIFT算子是非常稳健的匹配技术，"),l("code",null,"简单性"),s("不是它的特点。")]),l("li",null,[s("图像微分"),l("code",null,"增强"),s("了边缘和其他突变的信息。")]),l("li",null,[s("高通滤波后的图像通常较暗，为改善这种情况，将高通滤波器的转移函数加上一常数量以便引入一些低频分量。这样的滤波器叫"),l("code",null,"高频提升滤波器"),s("。")]),l("li",null,[s("采用模板［-1 1］主要检测"),l("code",null,"垂直"),s("方向的边缘。")]),l("li",null,[s("锐化模板"),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mo",{fence:"true"},"["),l("mtable",{rowspacing:"0.16em",columnalign:"center center center",columnspacing:"1em"},[l("mtr",null,[l("mtd",null,[l("mstyle",{scriptlevel:"0",displaystyle:"false"},[l("mrow",null,[l("mo",null,"−"),l("mn",null,"1")])])]),l("mtd",null,[l("mstyle",{scriptlevel:"0",displaystyle:"false"},[l("mrow",null,[l("mo",null,"−"),l("mn",null,"1")])])]),l("mtd",null,[l("mstyle",{scriptlevel:"0",displaystyle:"false"},[l("mrow",null,[l("mo",null,"−"),l("mn",null,"1")])])])]),l("mtr",null,[l("mtd",null,[l("mstyle",{scriptlevel:"0",displaystyle:"false"},[l("mrow",null,[l("mo",null,"−"),l("mn",null,"1")])])]),l("mtd",null,[l("mstyle",{scriptlevel:"0",displaystyle:"false"},[l("mn",null,"9")])]),l("mtd",null,[l("mstyle",{scriptlevel:"0",displaystyle:"false"},[l("mrow",null,[l("mo",null,"−"),l("mn",null,"1")])])])]),l("mtr",null,[l("mtd",null,[l("mstyle",{scriptlevel:"0",displaystyle:"false"},[l("mrow",null,[l("mo",null,"−"),l("mn",null,"1")])])]),l("mtd",null,[l("mstyle",{scriptlevel:"0",displaystyle:"false"},[l("mrow",null,[l("mo",null,"−"),l("mn",null,"1")])])]),l("mtd",null,[l("mstyle",{scriptlevel:"0",displaystyle:"false"},[l("mrow",null,[l("mo",null,"−"),l("mn",null,"1")])])])])]),l("mo",{fence:"true"},"]")]),l("annotation",{encoding:"application/x-tex"},"\\begin{bmatrix}-1 & -1 & -1\\\\ -1 & 9 & -1\\\\ -1 & -1 & -1\\end{bmatrix}")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"3.6em","vertical-align":"-1.55em"}}),l("span",{class:"minner"},[l("span",{class:"mopen"},[l("span",{class:"delimsizing mult"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"2.05em"}},[l("span",{style:{top:"-4.05em"}},[l("span",{class:"pstrut",style:{height:"5.6em"}}),l("span",{style:{width:"0.667em",height:"3.600em"}},[l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.667em",height:"3.600em",viewBox:"0 0 667 3600"},[l("path",{d:`M403 1759 V84 H666 V0 H319 V1759 v0 v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v0 v1759 h84z`})])])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"1.55em"}},[l("span")])])])])]),l("span",{class:"mord"},[l("span",{class:"mtable"},[l("span",{class:"col-align-c"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"2.05em"}},[l("span",{style:{top:"-4.21em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord"},[l("span",{class:"mord"},"−"),l("span",{class:"mord"},"1")])]),l("span",{style:{top:"-3.01em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord"},[l("span",{class:"mord"},"−"),l("span",{class:"mord"},"1")])]),l("span",{style:{top:"-1.81em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord"},[l("span",{class:"mord"},"−"),l("span",{class:"mord"},"1")])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"1.55em"}},[l("span")])])])]),l("span",{class:"arraycolsep",style:{width:"0.5em"}}),l("span",{class:"arraycolsep",style:{width:"0.5em"}}),l("span",{class:"col-align-c"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"2.05em"}},[l("span",{style:{top:"-4.21em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord"},[l("span",{class:"mord"},"−"),l("span",{class:"mord"},"1")])]),l("span",{style:{top:"-3.01em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord"},[l("span",{class:"mord"},"9")])]),l("span",{style:{top:"-1.81em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord"},[l("span",{class:"mord"},"−"),l("span",{class:"mord"},"1")])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"1.55em"}},[l("span")])])])]),l("span",{class:"arraycolsep",style:{width:"0.5em"}}),l("span",{class:"arraycolsep",style:{width:"0.5em"}}),l("span",{class:"col-align-c"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"2.05em"}},[l("span",{style:{top:"-4.21em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord"},[l("span",{class:"mord"},"−"),l("span",{class:"mord"},"1")])]),l("span",{style:{top:"-3.01em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord"},[l("span",{class:"mord"},"−"),l("span",{class:"mord"},"1")])]),l("span",{style:{top:"-1.81em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord"},[l("span",{class:"mord"},"−"),l("span",{class:"mord"},"1")])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"1.55em"}},[l("span")])])])])])]),l("span",{class:"mclose"},[l("span",{class:"delimsizing mult"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"2.05em"}},[l("span",{style:{top:"-4.05em"}},[l("span",{class:"pstrut",style:{height:"5.6em"}}),l("span",{style:{width:"0.667em",height:"3.600em"}},[l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.667em",height:"3.600em",viewBox:"0 0 667 3600"},[l("path",{d:`M347 1759 V0 H0 V84 H263 V1759 v0 v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v0 v1759 h84z`})])])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"1.55em"}},[l("span")])])])])])])])])]),s("。")]),l("li",null,[s("OpenCV用于将图像写入文件的函数是"),l("code",null,"imwrite( )"),s("。")]),l("li",null,[s("利用二阶导数检测边缘时，说法正确的是"),l("code",null,"边接二阶导数正值和负值的虚构直线将在边缘中点附近穿过零点，即过零点处即是边缘的位置"),s("。")]),l("li",null,[s("OpenCV中适用于检测图像中的直线的函数是"),l("code",null,"HoughLines()"),s("。")]),l("li",null,[s("下图所示效果是对图像运用"),l("code",null,"边缘检测"),s("处理得到的。")])],-1),u=i('<hr><ol><li>角点是在移动该像素点所在的小窗口，窗口内图像块的内容在所有方向上都有显著变化的像素点。<code>对</code></li><li>拉普拉斯算子可用于图像的平滑处理。<code>错</code></li><li>可变尺度函数G(x,y,σ)中的σ决定了图像的平滑程度，值越大，越体现图像的细节信息。<code>错</code></li><li>共点直线群的Hough变换是一条正弦曲线。<code>对</code></li><li>Harris角点检测算子的特点是具备平移、旋转和尺度不变性。<code>错</code></li><li>采用直方图双峰法进行图像分割算法简单，对所有图像都有效。<code>错</code></li><li>在使用区域合并、分裂方法进行图像分割时，不需要用到每个子块的属性。<code>错</code></li><li>图像分割是把图像分成目标和背景两个区域。<code>错</code></li><li>图像可以根据像素之间的相似性原理进行分割，比如区域合并法。 <code>对</code></li><li>基于图像灰度空间分布的阈值方法不需要考虑像素与像素之间的相关性。<code>错</code></li><li>区域生长方法的实现有三个关键点：种子点的选取；生长准则的确定；区域生长停止的条件。<code>对</code></li><li>对于光照不均的图像，采用动态阈值比全局阈值好。<code>对</code></li><li>基于阈值的分割方法的核心是阈值的确定。<code>对</code></li></ol><hr><h2 id="名词解释-3-5-15" tabindex="-1"><a class="header-anchor" href="#名词解释-3-5-15" aria-hidden="true">#</a> 名词解释 3 * 5 = 15</h2><ol><li>图像数字化、空间分辩率、灰度分辩率</li></ol><ul><li>图像数字化就是把连续的图像信号转换成离散的数字信号的过程。图像数字化包括两个步骤：采样和量化。<strong>采样</strong>：就是把图像在空间上分割成M×N个网格，每个网格用一个亮度值来表示。一个网格称为一个像素。采样间隔越大，所得图像像素数越少，空间分辨率低，质量差；采样间隔越小，所得图像像素数越多，空间分辨率高，图像质量好，但数据量大。<strong>量化</strong>：就是把每个像素的亮度值用有限的数字来表示的过程。量化等级越多，所得图像层次越丰富，灰度分辨率高，图像质量好，但数据量大；量化等级越少，图像层次欠丰富，灰度分辨率低，会出现假轮廓现象，图像质量变差，但数据量小。</li><li>空间分辨率：就是图像中可辨别的最小细节的度量。</li><li>灰度分辨率: 是指在图像中能够表示的灰度级数。灰度分辨率越大，图像的层次越丰富，图像质量越好，但数据量也越大。</li><li>图像大小的计算是指计算图像占用的存储空间或内存空间的大小。图像大小的计算公式是：大小 = 分辨率 * 位深 / 8。其中，分辨率是指图像的宽度和高度，用像素数表示；位深是指每个像素可以使用的颜色信息数量，用比特数表示；8是指一个字节（byte）等于8个比特（bit）。图像大小的单位通常是字节（byte），也可以换算成千字节（KB）、兆字节（MB）等。</li></ul><ol start="2"><li>图像的几何变换（平移、旋转、缩放、仿射等）与插值</li></ol><ul><li>图像的几何变换是指对图像进行一些空间变换，如平移、旋转、缩放、仿射等，以改变图像的位置、方向、形状或尺寸。图像的几何变换一般由两个基本步骤组成：像素坐标变换和亮度插值。 <ul><li>图像的平移变换是指将图像中所有的点按照指定的平移量水平或者垂直移动。</li><li>图像的旋转变换是指以图像的中心为原点，旋转一定的角度。</li><li>图像的缩放变换是指图像大小按指定的比例进行放大或缩小。</li><li>图像的仿射变换是指对图像进行一些线性变换和平移变换，以改变图像的位置、方向、形状或尺寸。</li></ul></li><li>像素坐标变换是将输入图像的像素映射到输出图像的像素中，根据不同的变换类型，可以有不同的映射函数或矩阵。例如，平移变换可以用一个平移向量来表示，旋转变换可以用一个旋转矩阵来表示，缩放变换可以用一个缩放因子来表示，仿射变换可以用一个仿射矩阵来表示。</li><li>亮度插值是在像素坐标变换后，找到映射前后对应的像素对象，并把亮度值传递过去。由于映射后的像素坐标可能不是整数，因此需要用一定的方法来估计其亮度值。常用的插值方法有最邻近插值、双线性插值、三次样条插值等。</li><li>最邻近插值是一种最简单的插值方法，它直接取距离映射后坐标最近的整数坐标点的亮度值作为输出。这种方法速度快，但效果差，会产生明显的锯齿或马赛克现象。</li><li>双线性插值是一种较好的插值方法，它根据映射后坐标周围的四个整数坐标点的亮度值和距离比例来计算输出。这种方法相对平滑，但会导致一定程度的模糊。</li><li>三次样条插值是一种较高级的插值方法，它根据映射后坐标周围的十六个整数坐标点的亮度值和三次多项式函数来计算输出。这种方法更加精确，但也更加复杂和耗时。</li></ul><h2 id="简答题-4-30" tabindex="-1"><a class="header-anchor" href="#简答题-4-30" aria-hidden="true">#</a> 简答题 4 * ？= 30</h2>',9),h=l("li",null,[l("p",null,"试给出把灰度范围（0，10）拉伸为（0，20），把灰度范围（10，20）移至（20，30），并把灰度范围（20，35）压缩到（30，35）的变换方程。"),l("ul",null,[l("li",null,"线性变换、分段线性变换其实差不多，目的是为了突出感兴趣目标的灰度区间，相对抑制那些不感兴趣的灰度区间，大多采用分段线形变换。"),l("li",null,[s("(a,b)->(c,d)的公式是："),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mo",{stretchy:"false"},"("),l("mi",null,"d"),l("mo",null,"−"),l("mi",null,"c"),l("mo",{stretchy:"false"},")"),l("mi",{mathvariant:"normal"},"/"),l("mo",{stretchy:"false"},"("),l("mi",null,"b"),l("mo",null,"−"),l("mi",null,"a"),l("mo",{stretchy:"false"},")"),l("mo",null,"∗"),l("mo",{stretchy:"false"},"("),l("mi",null,"x"),l("mo",null,"−"),l("mi",null,"a"),l("mo",{stretchy:"false"},")"),l("mo",null,"+"),l("mi",null,"c")]),l("annotation",{encoding:"application/x-tex"},"(d-c)/(b-a)*(x-a) + c")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),l("span",{class:"mopen"},"("),l("span",{class:"mord mathnormal"},"d"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"−"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),l("span",{class:"mord mathnormal"},"c"),l("span",{class:"mclose"},")"),l("span",{class:"mord"},"/"),l("span",{class:"mopen"},"("),l("span",{class:"mord mathnormal"},"b"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"−"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),l("span",{class:"mord mathnormal"},"a"),l("span",{class:"mclose"},")"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"∗"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),l("span",{class:"mopen"},"("),l("span",{class:"mord mathnormal"},"x"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"−"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),l("span",{class:"mord mathnormal"},"a"),l("span",{class:"mclose"},")"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"+"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.4306em"}}),l("span",{class:"mord mathnormal"},"c")])])]),s("。")]),l("li",null,"变换后自己减自己比上变换前自己比自己，然后x减去变换前的横坐标点再加上变换后的横坐标点。"),l("li",null,"f(×)=2x"),l("li",null,"f(×)=x+10"),l("li",null,"f(x)= (x- 20)/3+30")])],-1),y=l("ul",null,[l("li",null,"中值滤波"),l("li",null,"对于图像中的每个像素，选择一个邻域（如 3x3、5x5 等）"),l("li",null,"对于邻域内的像素值，按照大小排序，取其中位数作为该像素的新值。"),l("li",null,"重复上述过程，直到所有像素都被处理过。"),l("li",null,"对于图像边缘的像素，可以选择不处理，或者用边缘像素的值来填充邻域。")],-1),g=l("ul",null,[l("li",null,"图像分割是指将一幅图像分成若干个具有语义意义的区域的过程。这些区域可以是物体、背景、前景等等。图像分割的必要性在于它是许多计算机视觉任务的基础，例如目标检测、图像识别、人脸识别、医学影像分析等等。在这些任务中，正确的图像分割可以帮助我们更准确地识别图像中的物体或区域，从而提高任务的准确率和效率。"),l("li",null,"此外，图像分割在计算机视觉领域中也是一个非常重要的研究方向。图像分割算法不仅可以用于静态图像，也可以用于视频中的动态图像。在自动驾驶、无人机、机器人等领域中，图像分割可以帮助机器人或无人机更准确地感知周围环境，从而更好地完成任务。因此，图像分割的研究也具有非常重要的应用和研究价值。")],-1),v=l("ul",null,[l("li",null,"阈值法的基本思想是基于图像的灰度特征来计算一个或多个灰度阈值，并将图像中每个像素的灰度值与阈值作比较，最后将像素根据比较结果分到合适的类别中。"),l("li",null,"优点：直接利用图像的灰度特性，所以计算简单、运算效率较高、速度快"),l("li",null,"缺点：对噪声敏感，对灰度差异不明显以及不同目标灰度值有重叠分割不明显，所以需要与其他方法进行结合，合适的阈值查找。")],-1),b=l("h2",{id:"计算题-3-25",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#计算题-3-25","aria-hidden":"true"},"#"),s(" 计算题 3 * ？= 25")],-1),_=l("li",null,"阈值化分割：",-1),w=l("h2",{id:"重要知识点总结",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#重要知识点总结","aria-hidden":"true"},"#"),s(" 重要知识点总结")],-1),f=l("li",null,[l("p",null,"图像数字化、空间分辩率、灰度分辩率、图像大小的计算")],-1),x=l("li",null,[l("p",null,"图像的算术运算（加、减、乘、除）的定义及其主要应用：图像的加法运算是指将两幅图像的对应像素值相加得到输出图像的方法。它可以用于去除叠加性随机噪声，生成图像叠加效果，或者增加图像的亮度；图像的减法运算是指将两幅图像的对应像素值相减得到输出图像的方法。它可以用于检测同一场景两幅图像之间的变化，称为差影法，或者减少图像的亮度；图像的乘法运算是指将两幅图像的对应像素值相乘得到输出图像的方法。它可以用于实现掩模操作，即屏蔽掉图像的某些部分，或者增强图像的明暗效果。图像的除法运算是指将两幅图像的对应像素值相除得到输出图像的方法。它可以用于校正成像设备的非线性影响，或者检测图像差异的比率。")],-1),V=l("li",null,[l("p",null,"图像的几何变换（平移、旋转、缩放、仿射等）与插值")],-1),H=l("li",null,[l("p",null,"灰度变换（线性变换、分段线性变换、幂次变换与伽马校正、直方图的概念、直方图均衡化）的计算与作用")],-1),B={href:"https://www.bilibili.com/video/BV1iS4y1R759?p=4&vd_source=3ccd3a17b08ba7453b6a6fcb0b7cdc5b",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.bilibili.com/video/BV1iS4y1R759?p=5&vd_source=3ccd3a17b08ba7453b6a6fcb0b7cdc5b",target:"_blank",rel:"noopener noreferrer"},M=l("li",null,[l("p",null,"图像锐化与边缘检测算子（robert、sobel、priwitt、Laplacian、canny）、高通滤波")],-1),S=l("li",null,[l("p",null,"图像傅立叶变换的性质、特点、图像的频谱模型、同态滤波")],-1),I=l("li",null,[l("p",null,"线的检测、Hough变换、Harris角点检测、SIFT特征检测基本原理、步骤及特点")],-1),R={href:"https://www.bilibili.com/video/BV1iS4y1R759?p=8&vd_source=3ccd3a17b08ba7453b6a6fcb0b7cdc5b",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.bilibili.com/video/BV1iS4y1R759?p=9&vd_source=3ccd3a17b08ba7453b6a6fcb0b7cdc5b",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.bilibili.com/video/BV1434y1E7YZ?p=7&vd_source=3ccd3a17b08ba7453b6a6fcb0b7cdc5b",target:"_blank",rel:"noopener noreferrer"};function T(G,L){const a=t("Badge"),n=t("ExternalLinkIcon");return o(),p("div",null,[r,d,u,l("ol",null,[h,l("li",null,[l("p",null,[s("有受噪声污染的图像，如下图所示，应采用何种什么方法效果最佳？试阐述其基本处理步骤。 "),e(a,{text:"学习通",type:"tip"})]),y]),l("li",null,[l("p",null,[s("简述图像分割的必要性。"),e(a,{text:"学习通",type:"tip"})]),g]),l("li",null,[l("p",null,[s("简述阈值分割的基本思想、优缺点。 "),e(a,{text:"学习通",type:"tip"})]),v])]),b,l("ol",null,[l("li",null,[s("分裂合并法"),e(a,{text:"学习通",type:"tip"}),s("：")]),_]),w,l("ol",null,[f,l("li",null,[l("p",null,[s("彩色模型"),e(a,{text:"名词解释",type:"tip"}),s("：RGB、HIS、CMY（K）：RGB模型用红、绿、蓝三种原色的不同组合来表示各种颜色。HIS模型用色调、饱和度、强度三个参数来描述颜色。CMY(K)模型用青、洋红、黄、黑四种颜料的不同组合来表示各种颜色。")])]),x,V,l("li",null,[l("p",null,[s("图像增强的概念与作用"),e(a,{text:"简答",type:"tip"}),s("：概念：突出图像中的某些信息同时削弱或者去除某些不必要的信息以得到效果更好或者更有用的图像的技术；作用：解决图像传输或者处理过程中引入噪声或使图像变模糊的问题，增强图像质量和特征，使图像分析变得更容易；")])]),H,l("li",null,[l("p",null,[s("图像去噪与图像平滑（邻域平均法: "),l("a",B,[s("盐焗小星球790"),e(n)]),s("、中值滤波: "),l("a",k,[s("盐焗小星球790"),e(n)]),s("）、低通滤波")])]),M,S,I,l("li",null,[l("p",null,[s("图像分割的定义及作用、阈值分割："),l("a",R,[s("盐焗小星球790"),e(n)]),s(";、区域生长法、分裂合并法")])]),l("li",null,[l("p",null,[s("图像的形态学滤波（膨胀、腐蚀、开、闭运算"),e(a,{text:"简答",type:"tip"}),s(": 先腐蚀后膨胀称为开运算。先膨胀后腐蚀称为闭运算。"),l("a",C,[s("盐焗小星球790"),e(n)]),s("；"),l("a",N,[s("高数帮"),e(n)]),s(";膨胀可以使图像边界变得模糊同时可以连接相邻的物体，腐蚀可以消除小的物体或孔洞并使物体变得更加细长，开运算能平滑物体的边界并保持物体大小不变，闭运算能使物体边界变得更平滑并消除不同亮度之间的区域。")])])])])}const E=c(m,[["render",T],["__file","2.html.vue"]]);export{E as default};
