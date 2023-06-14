import{_ as m}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as r,a as s,b as l,d as n,w as e,f as t}from"./app-691e9c01.js";const p={},o=s("h2",{id:"选择-10-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#选择-10-2","aria-hidden":"true"},"#"),l(" 选择 10 * 2")],-1),h=s("br",null,null,-1),u=s("br",null,null,-1),g=s("br",null,null,-1),d=s("br",null,null,-1),y=s("br",null,null,-1),_=s("br",null,null,-1),b=s("br",null,null,-1),f=s("br",null,null,-1),x=s("blockquote",null,[s("p",null,"当前层感受野=前一层感受野+(卷积核大小-1)*(前一层之前包括前一层的所有步长之积)")],-1),v={start:"3"},S=s("br",null,null,-1),w=s("br",null,null,-1),z=s("br",null,null,-1),k=s("br",null,null,-1),B=s("br",null,null,-1),M=s("br",null,null,-1),C=s("br",null,null,-1),A=s("br",null,null,-1),L=s("br",null,null,-1),D=s("br",null,null,-1),N=s("br",null,null,-1),T=s("br",null,null,-1),P=s("br",null,null,-1),q=s("br",null,null,-1),R=s("br",null,null,-1),V=s("br",null,null,-1),j=s("br",null,null,-1),U=s("br",null,null,-1),E=s("br",null,null,-1),H=s("br",null,null,-1),G=s("br",null,null,-1),O=s("br",null,null,-1),W=s("br",null,null,-1),F=s("br",null,null,-1),I=s("br",null,null,-1),J=s("br",null,null,-1),K=s("br",null,null,-1),Q=s("br",null,null,-1),X=s("br",null,null,-1),Y=s("br",null,null,-1),Z=s("br",null,null,-1),$=s("br",null,null,-1),ss=s("br",null,null,-1),ls=s("br",null,null,-1),as=s("br",null,null,-1),ns=s("br",null,null,-1),es=s("br",null,null,-1),ts=s("br",null,null,-1),ms=s("br",null,null,-1),is=s("br",null,null,-1),cs=t('<h2 id="判断-10-1" tabindex="-1"><a class="header-anchor" href="#判断-10-1" aria-hidden="true">#</a> 判断 10 * 1</h2><ol><li>增加多层感知机（Multilayer Perceptron）的隐藏层层数，分类误差便会减小。（ √ ）</li><li>机器学习算法过程中无需进行特征提取工作。（ × ）</li><li>GoogLeNet使用了全局平均池化替代全连接层，使网络参数大幅减少。（ √ ）</li><li>通过近邻插值实现上采样上池化，会参与反向传播过程。（ × ）</li><li>机器学习包括深度学习。（ √ ）</li><li>小的卷积核级联的效果等价于大卷积核的效果，但权重等参数会大大减少。（ √ ）</li><li>LSTM(Long Short-Term Memory),即长短期记忆网络,是CNN的扩展。（ × ）</li><li>不同卷积层或同一卷积层只能用一种大小的卷积核。（ × ）</li><li>隐层的权重取值太小不容易导致梯度消失。（ × ）</li><li>循环神经网络(RNN)可以用于处理序列数据。（ √ ）</li></ol><h2 id="简答-5-6" tabindex="-1"><a class="header-anchor" href="#简答-5-6" aria-hidden="true">#</a> 简答 5 * 6</h2><ol><li><p>请简要分析人工智能与深度学习的关系</p><ul><li>人工智能是关于使机器具备智能的学科，涵盖了各种技术和方法。</li><li>深度学习是人工智能的一个子领域，基于人工神经网络的算法，通过多层次的神经网络结构来学习和表示数据。</li><li>深度学习能够自动学习和提取高层次的抽象特征，具有强大的模式识别和数据建模能力。</li><li>因此，深度学习成为了实现许多人工智能任务的关键技术，如图像识别、自然语言处理和语音识别等。</li><li>深度学习在推动人工智能的发展和应用方面发挥了重要作用。</li></ul></li><li><p>与全连接层相比，简要阐述卷积层有哪些特点及优势。</p><ul><li>局部连接：大大减少模型中的参数量从而减少过拟合的风险</li><li>参数共享：极大提高网络泛化能力并减少了需要训练的参数数量</li><li>尺度不变：同一卷积核适应不同输入，识别相同模式。</li><li>层次结构：多层卷积层学习不同级别的特征，逐渐抽象输入。</li><li>计算效率：卷积层的计算量比全连接层要小得多</li></ul></li><li><p>激活函数有什么作用，请结合自己的理解谈谈；并分析常见激活函数ReLU与Sigmoid的优缺点。</p><ul><li>激活函数对神经元输出做非线性变换，提高了网络的表达能力和适应性。</li><li>ReLU的优点是计算高效、减轻梯度消失问题、适用于深层网络。缺点是当输入为负时梯度为零可能导致神经元死亡。</li><li>Sigmoid具有可导性和输出范围限制的优点，但容易饱和导致梯度消失问题，也计算相对复杂。</li></ul></li><li><p>请概述什么是模型过拟合、欠拟合，并分析解决方法有哪些？（至少两种）</p><ul><li>模型过拟合是指模型在训练集上表现良好，但在测试集或新数据上表现较差的情况，即模型过于复杂而过度拟合训练数据。欠拟合则是指模型无法很好地拟合训练数据，导致训练和测试误差都较高。</li><li>解决过拟合的方法包括： <ol><li>数据扩充：增加训练数据量，提供更多样本以减少过拟合。</li><li>正则化：通过添加正则化项，如L1正则化或L2正则化，对模型的复杂度进行惩罚，限制参数的过大取值。</li></ol></li><li>解决欠拟合的方法包括： <ol><li>增加模型复杂度：增加模型的层数或神经元数量，增加模型的容量以提高拟合能力。</li><li>特征工程：对输入特征进行适当的预处理或提取更有代表性的特征，使模型能更好地捕捉数据的模式。</li></ol></li></ul></li><li><p>卷积神经网络的关键层有哪些，它们有什么功能，请结合自己的理解谈谈。</p><ul><li>卷积神经网络的关键层包括<code>卷积层</code>、<code>池化层</code>和<code>全连接层</code>。</li><li>卷积层通过卷积操作提取输入数据的局部特征，利用权值共享和局部感知的特性，能够捕捉图像、语音等数据的空间和时间相关性。</li><li>池化层通过降采样操作减少特征图的空间维度，减少参数数量和计算量，并保持重要特征的不变性。</li><li>全连接层将特征映射到输出类别，提供最终的分类或回归结果。</li></ul></li><li><p>画出sigmoid的大致图像，推导出sigmoid的函数一阶和二阶导数。</p></li></ol><figure><img src="https://pic.imgdb.cn/item/64882b141ddac507ccfb9970.png" alt="sigmoid的大致图像" tabindex="0" loading="lazy"><figcaption>sigmoid的大致图像</figcaption></figure>',5),rs=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"S"),s("mrow",null,[s("mo",{fence:"true"},"("),s("mi",null,"x"),s("mo",{fence:"true"},")")]),s("mo",null,"="),s("mfrac",null,[s("mn",null,"1"),s("mrow",null,[s("mn",null,"1"),s("mo",null,"+"),s("msup",null,[s("mi",null,"e"),s("mrow",null,[s("mo",null,"−"),s("mi",null,"x")])])])])]),s("annotation",{encoding:"application/x-tex"}," S\\left ( x \\right ) = \\frac{1}{1+e^{-x} } ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose delimcenter",style:{top:"0em"}},")")]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.0908em","vertical-align":"-0.7693em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6973em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"−"),s("span",{class:"mord mathnormal mtight"},"x")])])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7693em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])],-1),ps=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"S"),s("msup",null,[s("mrow",null,[s("mo",{fence:"true"},"("),s("mi",null,"x"),s("mo",{fence:"true"},")")]),s("mo",{mathvariant:"normal",lspace:"0em",rspace:"0em"},"′")]),s("mo",null,"="),s("mfrac",null,[s("msup",null,[s("mi",null,"e"),s("mrow",null,[s("mo",null,"−"),s("mi",null,"x")])]),s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"+"),s("msup",null,[s("mi",null,"e"),s("mrow",null,[s("mo",null,"−"),s("mi",null,"x")])]),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")])])]),s("mo",null,"="),s("mi",null,"S"),s("mrow",null,[s("mo",{fence:"true"},"("),s("mi",null,"x"),s("mo",{fence:"true"},")")]),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"S"),s("mrow",null,[s("mo",{fence:"true"},"("),s("mi",null,"x"),s("mo",{fence:"true"},")")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," S\\left ( x \\right )' = \\frac{e^{-x}}{(1+e^{-x})^2 } = S\\left ( x \\right )(1-S\\left ( x \\right )) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1418em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose delimcenter",style:{top:"0em"}},")")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8918em"}},[s("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"′")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.3843em","vertical-align":"-0.936em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4483em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6973em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"−"),s("span",{class:"mord mathnormal mtight"},"x")])])])])])])])]),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7401em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"e"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7713em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"−"),s("span",{class:"mord mathnormal mtight"},"x")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.936em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose delimcenter",style:{top:"0em"}},")")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose delimcenter",style:{top:"0em"}},")")]),s("span",{class:"mclose"},")")])])])])],-1),os=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mtable",{rowspacing:"0.25em",columnalign:"right left",columnspacing:"0em"},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mi",null,"S"),s("msup",null,[s("mrow",null,[s("mo",{fence:"true"},"("),s("mi",null,"x"),s("mo",{fence:"true"},")")]),s("mrow",null,[s("mo",{mathvariant:"normal"},"′"),s("mo",{mathvariant:"normal"},"′")])])])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mo",null,"="),s("mi",null,"S"),s("msup",null,[s("mrow",null,[s("mo",{fence:"true"},"("),s("mi",null,"x"),s("mo",{fence:"true"},")")]),s("mo",{mathvariant:"normal",lspace:"0em",rspace:"0em"},"′")]),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"S"),s("mrow",null,[s("mo",{fence:"true"},"("),s("mi",null,"x"),s("mo",{fence:"true"},")")]),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mi",null,"S"),s("mrow",null,[s("mo",{fence:"true"},"("),s("mi",null,"x"),s("mo",{fence:"true"},")")]),s("mo",{stretchy:"false"},"("),s("mo",null,"−"),s("mi",null,"S"),s("msup",null,[s("mrow",null,[s("mo",{fence:"true"},"("),s("mi",null,"x"),s("mo",{fence:"true"},")")]),s("mo",{mathvariant:"normal",lspace:"0em",rspace:"0em"},"′")]),s("mo",{stretchy:"false"},")")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mo",null,"="),s("mi",null,"S"),s("mrow",null,[s("mo",{fence:"true"},"("),s("mi",null,"x"),s("mo",{fence:"true"},")")]),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"S"),s("mrow",null,[s("mo",{fence:"true"},"("),s("mi",null,"x"),s("mo",{fence:"true"},")")]),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")]),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mi",null,"S"),s("msup",null,[s("mrow",null,[s("mo",{fence:"true"},"("),s("mi",null,"x"),s("mo",{fence:"true"},")")]),s("mn",null,"2")]),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"−"),s("mi",null,"S"),s("mrow",null,[s("mo",{fence:"true"},"("),s("mi",null,"x"),s("mo",{fence:"true"},")")]),s("mo",{stretchy:"false"},")")])])])])]),s("annotation",{encoding:"application/x-tex"}," \\begin{split} S\\left ( x \\right )'' & = S\\left ( x \\right )'(1-S\\left ( x \\right )) + S\\left ( x \\right )(- S\\left ( x \\right )') \\\\ & = S\\left ( x \\right )(1-S\\left ( x \\right ))^2+(-1) S\\left ( x \\right )^2(1-S\\left ( x \\right )) \\end{split} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.1658em","vertical-align":"-1.3329em"}}),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"col-align-r"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.8329em"}},[s("span",{style:{top:"-3.9411em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose delimcenter",style:{top:"0em"}},")")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8918em"}},[s("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"′′")])])])])])])])])])]),s("span",{style:{top:"-2.3271em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"})])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3329em"}},[s("span")])])])]),s("span",{class:"col-align-l"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.8329em"}},[s("span",{style:{top:"-3.9411em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose delimcenter",style:{top:"0em"}},")")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8918em"}},[s("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"′")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose delimcenter",style:{top:"0em"}},")")]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose delimcenter",style:{top:"0em"}},")")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"−"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose delimcenter",style:{top:"0em"}},")")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8918em"}},[s("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"′")])])])])])])])]),s("span",{class:"mclose"},")")])]),s("span",{style:{top:"-2.3271em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose delimcenter",style:{top:"0em"}},")")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose delimcenter",style:{top:"0em"}},")")]),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"−"),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose delimcenter",style:{top:"0em"}},")")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.954em"}},[s("span",{style:{top:"-3.2029em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose delimcenter",style:{top:"0em"}},")")]),s("span",{class:"mclose"},")")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3329em"}},[s("span")])])])])])])])])])])],-1),hs=s("h2",{id:"计算-40",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#计算-40","aria-hidden":"true"},"#"),l(" 计算 ？ * ？ = 40")],-1),us=s("ol",null,[s("li",null,[s("p",null,[l("现有输入（224，224，3）尺寸，先经过(3,3)的卷积核得到（224，224，1024）的特征输出特征，再经过(5,5)的卷积核得到（112，112，512）的特征。请计算两层网络参数量。"),s("br"),l(" 网络的参数量："),s("br"),l(" 解："),s("br"),l(" 第一层的参数量为：3 * 3 *3 *1024 + 1024= 28672"),s("br"),l(" 第二层的参数量为：1024 *5 *5 * 512 + 512= 13107712"),s("br"),l(" 那么总计为：28672 + 13107712 = 13136384")])]),s("li",null,[s("p",null,[l("现有一层简单的循环神经网络，t0、t1时刻的输入分别为1、-1，初始隐藏状态为"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"h"),s("mrow",null,[s("mi",null,"i"),s("mi",null,"n"),s("mi",null,"i"),s("mi",null,"t")])])]),s("annotation",{encoding:"application/x-tex"},"h_{init}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8444em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"h"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"ini"),s("span",{class:"mord mathnormal mtight"},"t")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),l("=[0,0]，激活函数为Tanh；循环体中全连接层的权重为")])])],-1),gs=t('<figure><img src="https://pic.imgdb.cn/item/64883dc01ddac507cc3a12da.jpg" alt="2" tabindex="0" loading="lazy"><figcaption>2</figcaption></figure><ol start="3"><li>假设有如下三层神经元，每个参数的数值如表所示，损失函数为均方误差损失，神经元激活函数为sigmoid，<br> 1、请计算出节点O1的输出值以及该网络的损失值。<br> 2、请计算反向传播时，参数w1的梯度值。<br> 3、请写出反向传播时，参数w6的梯度值（参考学习通上PPT，PPT有详细步骤）</li></ol><figure><img src="https://pic.imgdb.cn/item/64883dff1ddac507cc3bf160.jpg" alt="3" tabindex="0" loading="lazy"><figcaption>3</figcaption></figure><figure><img src="https://pic.imgdb.cn/item/64883e1e1ddac507cc3ccd34.jpg" alt="4" tabindex="0" loading="lazy"><figcaption>4</figcaption></figure>',4);function ds(ys,_s){const a=i("font");return c(),r("div",null,[o,s("ol",null,[s("li",null,[s("p",null,[l("LSTM中需要用到乘法门的是（ B ）。"),h,l(" A. LSTM中忘记门和记忆门要用到乘法门"),u,l(" B. "),n(a,{color:"red"},{default:e(()=>[l("LSTM中忘记门和输出门要用到乘法门")]),_:1}),g,l(" C. LSTM中只有输出门要用到乘法门"),d,l(" D. LSTM中记忆门和输出门要用到乘法门")])]),s("li",null,[s("p",null,[l("在CNN网络中，图A经过核为3*3，步长为2的卷积层，ReLU激活函数层，BN层，以及一个步长为2，核为2 * 2的池化层后，再经过一个3 * 3 的的卷积层，步长为1，此时的感受野是（ D ）。"),y,l(" A. 10"),_,l(" B. 11"),b,l(" C. 12"),f,l(" D. "),n(a,{color:"red"},{default:e(()=>[l("13")]),_:1})])])]),x,s("ol",v,[s("li",null,[s("p",null,[l("下列关于LSTM中用到的乘法门和加法门的描述正确的是（ D）。"),S,l(" A. 遗忘门要用到加法门"),w,l(" B. 乘法门是点乘运算"),z,l(" C. 输出门要用到加法门"),k,l(" D. "),n(a,{color:"red"},{default:e(()=>[l("乘法门是哈达玛乘积(Hadamard product)运算 ")]),_:1})])]),s("li",null,[s("p",null,[l("下面哪个选项不是神经网络训练过程中过拟合的防止方法（ C ）。"),B,l(" A. dropout"),M,l(" B. 提前终止"),C,l(" C. "),n(a,{color:"red"},{default:e(()=>[l("增加学习率")]),_:1}),A,l(" D. L2正则化")])]),s("li",null,[s("p",null,[l("BatchNorm 层对于input batch会统计出mean和variance用于计算 EMA。如果input batch 的 shape 为 (B, C, H, W)，统计出的 mean 和 variance 的shape为（ B ）。"),L,l(" A. B * 1 * 1 * 1"),D,l(" B. "),n(a,{color:"red"},{default:e(()=>[l("1 * C * 1 * 1 ")]),_:1}),N,l(" C. B * C * 1 * 1"),T,l(" D. 1 * 1 * 1 * 1")])]),s("li",null,[s("p",null,[l("以下哪种情景不适合采用Seq2Seq模型( A )"),P,l(" A. "),n(a,{color:"red"},{default:e(()=>[l("车牌识别 ")]),_:1}),q,l(" B. 文本摘要"),R,l(" C. 语音识别"),V,l(" D. 机器写诗")])]),s("li",null,[s("p",null,[l("下面关于卷积神经网络的描述中，错误的说法是（ B ）。"),j,l(" A. 局部感知使网络可以提取数据的局部特征，而权值共享大大降低了网络的训练难度"),U,l(" B. "),n(a,{color:"red"},{default:e(()=>[l("在卷积神经网络中，卷积和池化的作用主要是分类，全连接层的作用主要是特征获取 ")]),_:1}),E,l(" C. 卷积神经网络的输出层不一定用全连接网络"),H,l(" D. 通道数量越多，获得的特征图(feature map)就越多")])]),s("li",null,[s("p",null,[l("批规范化(Batch Normalization)的好处都有啥？（ A ）"),G,l(" A、"),n(a,{color:"red"},{default:e(()=>[l("让每一层的输入的范围都大致固定")]),_:1}),O,l(" B、它将权重的归一化平均值和标准差"),W,l(" C、它是一种非常有效的反向传播(BP)方法"),F,l(" D、这些均不是")])]),s("li",null,[s("p",null,[l("下列哪项关于模型能力（model capacity）的描述是正确的？（指神经网络模型能拟合复杂函数的能力）( A )"),I,l(" A、"),n(a,{color:"red"},{default:e(()=>[l("隐藏层层数增加，模型能力增加")]),_:1}),J,l(" B、Dropout的比例增加，模型能力增加"),K,l(" C、学习率增加，模型能力增加"),Q,l(" D、都不正确")])]),s("li",null,[s("p",null,[l("下列哪个神经网络结构会发生权重共享？( D )"),X,l(" A. 卷积神经网络"),Y,l(" B. 循环神经网络"),Z,l(" C. 全连接神经网络"),$,l(" D. "),n(a,{color:"red"},{default:e(()=>[l("选项A和B ")]),_:1})])]),s("li",null,[s("p",null,[l("Seq2Seq引入注意力机制后，直接影响解码器某时刻的输入语义向量的因素有（ A ）。"),ss,l(" A. "),n(a,{color:"red"},{default:e(()=>[l("编码器各个时刻隐单元的输出和解码器上一时刻隐层的输出 ")]),_:1}),ls,l(" B. 解码器该时刻的输出"),as,l(" C. 解码器上一时刻隐层的输出"),ns,l(" D. 编码器的输入")])]),s("li",null,[s("p",null,[l("输入图片大小为200×200，依次经过一层卷积（kernel size 5×5，padding 1，stride 2），pooling（kernel size 3×3，padding 0，stride 1）之后，输出特征图大小为( B )。"),es,l(" A. 96×96"),ts,l(" B. "),n(a,{color:"red"},{default:e(()=>[l("97×97 ")]),_:1}),ms,l(" C. 98×98"),is,l(" D. 99×99")])])]),cs,rs,ps,os,hs,us,gs])}const xs=m(p,[["render",ds],["__file","1.html.vue"]]);export{xs as default};
