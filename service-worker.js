if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const f=e=>a(e,i),b={module:{uri:i},exports:r,require:f};s[i]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(c(...e),r)))}}define(["./workbox-91fa23da"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1.html-9711c133.js",revision:"6216d8abfb9a5745a9184121ce15311e"},{url:"assets/1.html-b0c2d08d.js",revision:"283dccda5d621b7214193b8fc90a1cdc"},{url:"assets/2.html-355e2b38.js",revision:"1da274ac262e7de4a46053768de2a866"},{url:"assets/2.html-44a79d95.js",revision:"cf8245e1cf7cc98aa79592652aa0c6c3"},{url:"assets/2.html-8d16b9d1.js",revision:"8e566a055a5407650491c00bb4d0d0d4"},{url:"assets/2.html-e40ea5b8.js",revision:"4f2fef2c68a26e1b2c315e146d677a6b"},{url:"assets/3.html-ab81082b.js",revision:"7dafdc84294e3b1774effb9a0c61eef6"},{url:"assets/3.html-fa325243.js",revision:"c242dce49fd1e49c6d5db82619a608b6"},{url:"assets/4.html-765b0a46.js",revision:"2d20ac2a8de46e788b94ecee56e01b4b"},{url:"assets/4.html-7bbb45da.js",revision:"798cddfe5b96bdb5757fca5cdb164323"},{url:"assets/404.html-30824208.js",revision:"e9340e6f34b402a0937514c4f79f85ae"},{url:"assets/404.html-ec8ae2bf.js",revision:"75ce320eb7c54d93a1b00b41d03f3897"},{url:"assets/app-ef4843a7.js",revision:"88fe51f7f40220651102ec6a732c3b4c"},{url:"assets/arc-35f82988.js",revision:"03e1c7d46e73c7c6b9317e130694ba81"},{url:"assets/array-9f3ba611.js",revision:"17dcebeaf673b09a1ca5da014d20022f"},{url:"assets/auto-fa8841cf.js",revision:"34b2dbde32156a3e945129af69ce72c3"},{url:"assets/c4Diagram-4a1de0c4-f5c5564e.js",revision:"2e6769d0584bd1b9717eff03e4c86b71"},{url:"assets/casdoor.html-3c6eff5a.js",revision:"0a818eaef1acf7d970399d4f400cb97a"},{url:"assets/casdoor.html-b46db278.js",revision:"ba238d16c6f6d4e06bbe6ba5c792a1a9"},{url:"assets/cherry.html-0c1e94e2.js",revision:"0a437b1caa05344e93bb82ea960ba204"},{url:"assets/cherry.html-d4a1ebe5.js",revision:"24e7d2fdfab41ab584ff9d46c8767d14"},{url:"assets/classDiagram-62cfb02d-197c4fca.js",revision:"afc973ecc65c81a3e6f4173560a8cb7c"},{url:"assets/classDiagram-v2-c1dfb0e0-2222439a.js",revision:"8231bc7cd39f8a2d5b35536d1c4de4c5"},{url:"assets/commonjs-dynamic-modules-302442b1.js",revision:"2afbf9a8021b44e8591299a7a7dbfc94"},{url:"assets/commonjsHelpers-87174ba5.js",revision:"77a5b4fcd804a81bedf8afff4c186fd3"},{url:"assets/createText-2f679d62-d570751b.js",revision:"d54d45dd698849a397a7e0b47e1b2aaa"},{url:"assets/disable.html-0e739533.js",revision:"24e86c0b03b65739c8998a6dbdc4be16"},{url:"assets/disable.html-4080acbf.js",revision:"6c9141e09a4391cca5ceb1d07d39526d"},{url:"assets/dragonfruit.html-61d90f93.js",revision:"29fefac9e1c2f01365cf9c32be8e0559"},{url:"assets/dragonfruit.html-82806f4c.js",revision:"2da7df66faee2187b75431c2ee35988b"},{url:"assets/edges-97052da4-9ad29fd5.js",revision:"03a3b967f500c167aa1bc7b0271b7543"},{url:"assets/encrypt.html-2e83a417.js",revision:"b9626fc5a9f182d4335c31f046972467"},{url:"assets/encrypt.html-c28d147f.js",revision:"b802a1e43809464fe644211567e09401"},{url:"assets/erDiagram-5e907343-c7410843.js",revision:"e88f3b24cf38aeb029460311cb343c33"},{url:"assets/flowchart-d65a1d8e.js",revision:"43ce0668d18d5d5829ceab919e8fa62b"},{url:"assets/flowchart-elk-definition-206a7d68-58cecff3.js",revision:"e69e290bd91df13506f71009781fd907"},{url:"assets/flowDb-a707052f-d0a1d59c.js",revision:"589eee09318d2afef0abe0ee26c74e6a"},{url:"assets/flowDiagram-702318ad-ed2b9267.js",revision:"e12c84f0f1a1862934830a112359d975"},{url:"assets/flowDiagram-v2-8716a26e-c64eec23.js",revision:"40ee12fd9a7350cbac88823fee2e851f"},{url:"assets/ganttDiagram-3bc7fa50-07b923cb.js",revision:"c338c31bf7658f09f2b795cd30d3e3da"},{url:"assets/giscus-52604b1e.js",revision:"0dc4f96c4ad6007435d62c6399fe95de"},{url:"assets/gitGraphDiagram-127727f3-cc829688.js",revision:"d7bc2eab862dbf9b56eb53d279084238"},{url:"assets/gorm.html-42c03566.js",revision:"8b6b7d53d740d7168f80d49d0300e514"},{url:"assets/gorm.html-eb2b65e7.js",revision:"1ee0373c0918e2fc59c023ef5fdd7819"},{url:"assets/highlight.esm-75b11b9d.js",revision:"5d33e8aa724e0f03a23564f7c03bc7f5"},{url:"assets/index-05087a90-7ad940a9.js",revision:"b4843b7a342d3f8cf5e026d920ef41a6"},{url:"assets/index-ae8c1e74.js",revision:"2bf09e0b1a03439412e37096534213d6"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-00942c62.js",revision:"ad6f716120c0011644a1d071f8bd3b69"},{url:"assets/index.html-03f5d11b.js",revision:"4900906bf665b8b7b30e7311f3b28d67"},{url:"assets/index.html-078cb407.js",revision:"9433ce574541e5bc38128e6e69be4747"},{url:"assets/index.html-090b9a66.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-0a827710.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-0ec6e07a.js",revision:"a6df2389d9d0e592b44c356455ad0e21"},{url:"assets/index.html-104e7fde.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-11f83ebd.js",revision:"12a93364ddcc47a58911786db72e444d"},{url:"assets/index.html-147c661e.js",revision:"86ed77a08ef8cbf740ceb84115a1dd2e"},{url:"assets/index.html-1feae9b5.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-21a76e12.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-239741b4.js",revision:"3bb7b07e79c560ee834954007693d67b"},{url:"assets/index.html-2466b30f.js",revision:"d9d2c91cb0e6e7ea9542531d2db5a7f5"},{url:"assets/index.html-25020c24.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-25924783.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-26e843f9.js",revision:"83f92501fbd49798ad163eb39b963f2f"},{url:"assets/index.html-270d5a5c.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-2bbd6b32.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-2fc953ff.js",revision:"ad873d5648ede92411b85bc39af8ca77"},{url:"assets/index.html-31ecdb2f.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-3510c1c1.js",revision:"13b0b3f5592aec460224f029843b28f0"},{url:"assets/index.html-35a0f962.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-365e41c0.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-3775e44b.js",revision:"8f8864f05d947333810371c4731e8366"},{url:"assets/index.html-4561f7af.js",revision:"4f806cc1fa611aa79ed6f35e156c9a47"},{url:"assets/index.html-45648abc.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-45bf78a4.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-4616c1f1.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-496ead65.js",revision:"d18cca7f1a21d50ebe948740268ad1f1"},{url:"assets/index.html-4970cc5c.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-49d1681d.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-4b36d7ab.js",revision:"2ffb66d410d850ee59d2f0658f7f7c71"},{url:"assets/index.html-4d94f10b.js",revision:"4900906bf665b8b7b30e7311f3b28d67"},{url:"assets/index.html-528cae39.js",revision:"ce5c031efdd4d18f2c97e38f2b28fb8d"},{url:"assets/index.html-5578a5bb.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-56652ae0.js",revision:"6fc8a60425756e948a613c67d0d011e3"},{url:"assets/index.html-578c1269.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-592fed93.js",revision:"45f78281df7b7f31da2ea4f470964f5d"},{url:"assets/index.html-5e82e54b.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-6157eb29.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-62f32475.js",revision:"4611553413946d5d043f4a0f03e12bd3"},{url:"assets/index.html-65c519b0.js",revision:"4900906bf665b8b7b30e7311f3b28d67"},{url:"assets/index.html-6e6d6081.js",revision:"bd2e940ebcaf3deb5a6e2f195ed90922"},{url:"assets/index.html-6ee5b28f.js",revision:"3b699e110528d20099d226b98b2447ae"},{url:"assets/index.html-6f0398af.js",revision:"0009ce712b9efe3ff40c151c48440dd1"},{url:"assets/index.html-75648c4d.js",revision:"a2fc7a5d21a0c80f0ba920aa4e7676c1"},{url:"assets/index.html-7597cecc.js",revision:"9db80e47a1625d4b83591628dee88bd6"},{url:"assets/index.html-7a6666e4.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-801686f0.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-80f522b7.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-856ddd84.js",revision:"5baa0d5c736ddd260e3fa21a5ad186db"},{url:"assets/index.html-92fccebd.js",revision:"8f2753e72002f67624eef62510fff74f"},{url:"assets/index.html-936077d3.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-94ce433a.js",revision:"a208a975922df489e306255a1e97cc06"},{url:"assets/index.html-9679f7d3.js",revision:"4900906bf665b8b7b30e7311f3b28d67"},{url:"assets/index.html-994a19d6.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-9b60cdd8.js",revision:"4900906bf665b8b7b30e7311f3b28d67"},{url:"assets/index.html-a152d1c8.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-a3a405cb.js",revision:"92d359ab1938881c9f243a3a7a321154"},{url:"assets/index.html-a7480f39.js",revision:"1985546eda254c363e54f32ee3d4d450"},{url:"assets/index.html-aa22d00f.js",revision:"11791d0193c682a7846160ba2ebd5ee4"},{url:"assets/index.html-abb402cb.js",revision:"1e0c445c30fc5e830d31dcaa17c3bfeb"},{url:"assets/index.html-af93f027.js",revision:"56805690f108945c5c497abfe484a502"},{url:"assets/index.html-b2ae19d7.js",revision:"472c0bb6a1261b3bf694d5d62c686edf"},{url:"assets/index.html-b2ef7459.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-b375ed2f.js",revision:"d7c05423480f39539c58b4979cce4bbc"},{url:"assets/index.html-b8762c2f.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-bf64daf4.js",revision:"85362a0b5d826cc42a14df8557f55684"},{url:"assets/index.html-c01da999.js",revision:"eb7ccfdb22808f522348c373ad2a8ca1"},{url:"assets/index.html-c10d8d9e.js",revision:"51c5faddbffa3d08d1dbb6f33a38ba95"},{url:"assets/index.html-c29dde5d.js",revision:"ed8183ee0642bc1e15bb525c80bc3270"},{url:"assets/index.html-c3217508.js",revision:"f897995a8108a55c9c79a48b0fa6c12b"},{url:"assets/index.html-c4262f66.js",revision:"adf1bc926174bb8af5b1c8a32ec383bb"},{url:"assets/index.html-d0502d8e.js",revision:"8b94d5db3b2b3ff5b3c336a246992ecc"},{url:"assets/index.html-d1e79441.js",revision:"6f9ccf935ec01f9c53719fb7ccd3fa1c"},{url:"assets/index.html-d4346db0.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-d6290e17.js",revision:"214aca9c93b3b5738044a12d9a7d3be7"},{url:"assets/index.html-d7a8ee65.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-da38bd89.js",revision:"6656983d181895cb6475d0f3bc0ce796"},{url:"assets/index.html-dc4e94d7.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-e353d5c5.js",revision:"fef539d8472c3236d9225adea32c841c"},{url:"assets/index.html-e5695d32.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-e9e92edd.js",revision:"1d9fea6d6498056113a1de3bf8468382"},{url:"assets/index.html-f1a73220.js",revision:"1a84c49c78df13804f83c213a245db41"},{url:"assets/index.html-f25167b3.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-f2763390.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-f7d6a8b0.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-fd64f956.js",revision:"584e1673893638cabed1cc754de9cf17"},{url:"assets/index.html-fd6aa215.js",revision:"233785eb9240428a35dc9a4d1cf44773"},{url:"assets/index.html-fe20a97c.js",revision:"2b438fa2ee3b41a6d4db97ef3bc12772"},{url:"assets/infoDiagram-4374b389-d74afb6c.js",revision:"c4c079cdcdebc79f511f3a4917671092"},{url:"assets/init-77b53fdd.js",revision:"3ce28180466443e9b617d7b96e9f7b8f"},{url:"assets/intro.html-0092f329.js",revision:"dfae9743e39dad3871c6e6c1ac76713a"},{url:"assets/intro.html-b541dadf.js",revision:"bd3d92313a4891bd91de8727e7352d62"},{url:"assets/introduce-the-project-and-respond-to-project-details-inquiries.html-2401a748.js",revision:"559f698030dd9c2300e030fc6814ce4a"},{url:"assets/introduce-the-project-and-respond-to-project-details-inquiries.html-60cb3d26.js",revision:"4b6efce041d5301ab77d3c350ed217d7"},{url:"assets/journeyDiagram-ccf0174b-0bda7bd8.js",revision:"0b4dc0a440ad1d88e14957b6bbdce608"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/layout-0724b19b.js",revision:"5301500b4a274d212e22646aa999c1c9"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/line-540d2522.js",revision:"6ccb571792144257bb2419c3a4f14d7d"},{url:"assets/linear-98db5e32.js",revision:"027559b0288f818164ef66f0c105b399"},{url:"assets/markdown.esm-0191f9da.js",revision:"5e8c1ebb5afc5e81804eac9fe00a00c0"},{url:"assets/markdown.html-0c4be631.js",revision:"fba1532ff1b81c236258555ed77931e5"},{url:"assets/markdown.html-bb199fc0.js",revision:"1c2b939caeb063c823bc1be769f1e28e"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid.core-6bf243e1.js",revision:"1296a5f9816610be9bd17c5e66c69c7d"},{url:"assets/mindmap-definition-74e4e806-d8c2ab91.js",revision:"34e3ca235508933fd11329f48d4e6195"},{url:"assets/notes.esm-a106bb2c.js",revision:"7c95fadebe38cabad55423002748625b"},{url:"assets/page.html-44f2d9c8.js",revision:"f03c91f545496530f6ab572e98a1a723"},{url:"assets/page.html-d97fc714.js",revision:"74fb4ccf38ceb402495bc42e2b01ce88"},{url:"assets/path-53f90ab3.js",revision:"f86c0243cb45746453c6b4f7dbd9f34d"},{url:"assets/photoswipe.esm-2450701e.js",revision:"55b8097e827163367e1bb02833c0acec"},{url:"assets/pieDiagram-f5e05a25-9a238861.js",revision:"99fb3ef37661cd8093e780b4974699e4"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/quadrantDiagram-652558cb-984de538.js",revision:"d34e4ea00c95fdaa3e4184f2e6a92ef1"},{url:"assets/requirementDiagram-730b4d6e-709d33fd.js",revision:"fd4e9678954162a0608e74a3ee4022bf"},{url:"assets/reveal.esm-ec5549c1.js",revision:"40498a0448b327f408a5db6b67491b8a"},{url:"assets/search.esm-7e6792e2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/selectAll-18be6a3d.js",revision:"9710d7eb784515515db624f926e400d1"},{url:"assets/sequenceDiagram-edd7e28f-dd753794.js",revision:"d0689a08f328ed2896b97d723a9e7d41"},{url:"assets/simple-tcp-and-udp.html-9f0e34ea.js",revision:"2596a7f84e4f47c58e456a9c3ff9145b"},{url:"assets/simple-tcp-and-udp.html-bb6ca046.js",revision:"6051339a53ccee33e31900f0edb5fc02"},{url:"assets/slides.html-193d4d62.js",revision:"30a3d250b612d7272a7a96f4952b9c41"},{url:"assets/slides.html-3919d41b.js",revision:"2f74ec53a1de113741ffc91eec1ab0ab"},{url:"assets/some-understanding-of-Eight-Part-Essay.html-0bf97b3b.js",revision:"c346c4c294734eb174b4c944fda1d9b8"},{url:"assets/some-understanding-of-Eight-Part-Essay.html-379efd8d.js",revision:"112e4a0a26f4cb9b9a7631fc111119cd"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/stateDiagram-d766d74d-d45c2cdb.js",revision:"eedeae8fb8a0d2ddfd3f0bb456dea689"},{url:"assets/stateDiagram-v2-978d1189-80ec06ed.js",revision:"e6cdb1a312ca0febc580f14c1a9042d1"},{url:"assets/strawberry.html-2d6d2e4f.js",revision:"cacdcfb78289ace4760de25e3c7d623c"},{url:"assets/strawberry.html-3a12dc70.js",revision:"5a22758a70307a40cfd057455de70659"},{url:"assets/style-b3ebf4ba.css",revision:"2f6dbc8200468f19cfd1f8b627ffa9d9"},{url:"assets/styles-237fcbdf-c3bc512b.js",revision:"6be267b4dbde1f5af68ae5e4020f3257"},{url:"assets/styles-2797ae0f-2d1398b3.js",revision:"17bf641ccb3821f102062dcc9b6b452e"},{url:"assets/styles-40ddcbf3-e76dba14.js",revision:"774acb1e20926e29ff795d6a7f6d8bb0"},{url:"assets/svgDraw-6750006d-e5c26e1f.js",revision:"3d982be2285266a928e9f13533e83925"},{url:"assets/svgDrawCommon-f26cad39-49858a11.js",revision:"6afc65f9f002a1c232d9a32dcc691b0f"},{url:"assets/timeline-definition-d53f6d76-676150a0.js",revision:"3350db565c3ff209107e29250e934313"},{url:"assets/tomato.html-72736064.js",revision:"4cfff6bdec223acd22f849142b79da9f"},{url:"assets/tomato.html-a290a62c.js",revision:"8239c83870351cc15d2ec32f8d6037cf"},{url:"assets/vue-repl-366a315e.js",revision:"f5d679a1002335f5b44faf609f14170f"},{url:"assets/VuePlayground-2f2047a4.js",revision:"21bfe7cee905b19860db58de2bb23f83"},{url:"assets/vuepress-hope.html-01985e0d.js",revision:"0845eacd3297d117fe779b6c4a7fe761"},{url:"assets/vuepress-hope.html-216e7d5c.js",revision:"a74cff1a789c74054691acb06ff3b1ec"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"e6bbfaf0eff58a1f0b1bb0896a5eb917"},{url:"anime/index.html",revision:"5a96d0b9a489531b46f19bfd7396fa40"},{url:"article/index.html",revision:"a9cf57acd0a857499502ee823c9a7ea6"},{url:"category/index.html",revision:"1719edddba1112f979bf93d4e0695689"},{url:"category/使用指南/index.html",revision:"cf1c16517d96e14cf3484cfd3e5e77f7"},{url:"category/博客搭建/index.html",revision:"db4e82431b4d87636ce0f31b09e1a74c"},{url:"category/开源精选/index.html",revision:"06e6684e1203dcde710d16b027f0a61b"},{url:"category/樱桃/index.html",revision:"4172aed7ffa931a2d06b3642b93b9d40"},{url:"category/水果/index.html",revision:"a23fa1ec789694666bdad16fdc9c41da"},{url:"category/火龙果/index.html",revision:"187c1c13d0093ead88a1477a11294853"},{url:"category/网络编程/index.html",revision:"7a7fa85e5f900c052502272dbffeca15"},{url:"category/苹果/index.html",revision:"9f96386488278360e8188c5549dedb10"},{url:"category/草莓/index.html",revision:"96cfca9ca5d5fd5de505065b1582de21"},{url:"category/蔬菜/index.html",revision:"000965bed36d3a5416ed7c6283417398"},{url:"category/项目实战/index.html",revision:"2daba4c8126794b923bff32c14e54e65"},{url:"category/香蕉/index.html",revision:"4bfc146f20c688ecff19ac13c04d791a"},{url:"demo/disable.html",revision:"91755ec5805ff94b1e37cfdc8c63f8d9"},{url:"demo/encrypt.html",revision:"dd353861e6ec9a675f5dbc6d155c2ec8"},{url:"demo/index.html",revision:"885a4ff44002c79906c0171518ad3e3a"},{url:"demo/markdown.html",revision:"9bf91975417d3305561ad6c5f683a894"},{url:"demo/page.html",revision:"9d21c5dc96a4e3f0b229eebbed251bca"},{url:"index.html",revision:"b1fc904a48bae9c43773873ab01324e2"},{url:"intro.html",revision:"f72f1a25d3236f5170e7ea2173b1983f"},{url:"posts/apple/2.html",revision:"0f7bd7df4898f631f76c1cb0e60eb202"},{url:"posts/apple/index.html",revision:"ec5c152bc8ca7a75018fcb6c17d3a2d9"},{url:"posts/apple/introduce-the-project-and-respond-to-project-details-inquiries.html",revision:"5bcdea0b77b867066f90e11a4e6db1d8"},{url:"posts/apple/simple-tcp-and-udp.html",revision:"9c3bcb6ae4feda9ab1057a80359fa4d7"},{url:"posts/apple/some-understanding-of-Eight-Part-Essay.html",revision:"e321709f29e1259fc205206cf121f3fc"},{url:"posts/banana/1.html",revision:"e7c0c82488ee74a1e2ce5395b2a7f0b3"},{url:"posts/banana/2.html",revision:"bc26368ac75ddca70839d1f40b8c8ff1"},{url:"posts/banana/3.html",revision:"bfaafbd73c00393594ac69564bc3d8c3"},{url:"posts/banana/4.html",revision:"9a881a8748187d751cfc1ff74ab888d9"},{url:"posts/banana/index.html",revision:"4d009ec46da3907a8d554c3b254fb1d9"},{url:"posts/blog-building/index.html",revision:"c7e51fc3260ccab251d222571024ec71"},{url:"posts/blog-building/vuepress-hope.html",revision:"e042ee8f5e4b562db4a419b7f5db0c3e"},{url:"posts/cherry.html",revision:"253deb873a4309a61f881d108b875bdb"},{url:"posts/dragonfruit.html",revision:"b88b70c9d23902c7e875dcac94bd77d0"},{url:"posts/index.html",revision:"7a2f028d4004f0e4c1d0931e85818b9b"},{url:"posts/open-source-selection/gorm.html",revision:"a227de5125432218aefcdb6de89df627"},{url:"posts/open-source-selection/index.html",revision:"ea47f25d6afae51dba9224d55a61d735"},{url:"posts/project-practice/casdoor.html",revision:"7a6289c227e100750be3ae66085e39fd"},{url:"posts/project-practice/index.html",revision:"05c72ee3effb1fdcaca0622ed9912ab5"},{url:"posts/strawberry.html",revision:"ba84abb4b51e9b918e992a933d6022b2"},{url:"posts/tomato.html",revision:"35385fe3dad69e99b5c3d2134309602e"},{url:"slides.html",revision:"4f75640ddacbcad2da28c96d0599a2ef"},{url:"star/index.html",revision:"b672604c0af18fd9fcf2d299360dc323"},{url:"tag/blog/index.html",revision:"ad5ec5b7711e0a2f933fb957c072a913"},{url:"tag/casdoor/index.html",revision:"fd15f4acce06b462899faf1fce601f78"},{url:"tag/gorm/index.html",revision:"a1ad6977c056b82ef8e614f61c16e25a"},{url:"tag/index.html",revision:"7f813deaef6ad826d1d1675d4bc6c513"},{url:"tag/markdown/index.html",revision:"2fc51d7f96158f46618f0ade7fd125f2"},{url:"tag/tcp/index.html",revision:"0b0c71eab0f7b757b86a2fa0b6ade44b"},{url:"tag/udp/index.html",revision:"1724dc76b02851db911eb37a0b507b07"},{url:"tag/vuepress-hope/index.html",revision:"1fe6fb62a535ae14dcaff5aee9d3482d"},{url:"tag/vuepress/index.html",revision:"3966a4764b94959bfa886f1db3232359"},{url:"tag/使用指南/index.html",revision:"68c6bc7b05e4668f275a91fcd8768cc7"},{url:"tag/圆/index.html",revision:"ff9ff84bec448fb556ad1e3cf6011c61"},{url:"tag/大/index.html",revision:"21c5ad953a04468ce12edd9f9cd0b1f7"},{url:"tag/小/index.html",revision:"c2ad6eda9955c2c41b8622190b665146"},{url:"tag/弯曲的/index.html",revision:"1930f08c5c62f8754e4e73c060075327"},{url:"tag/文章加密/index.html",revision:"cb0a99e173e3a456aa302055417b3bcc"},{url:"tag/禁用/index.html",revision:"a62e6b5f16e7622ae41ff0b4e45a9ff4"},{url:"tag/红/index.html",revision:"3ec2a11033460eb9184a75ada15cff8b"},{url:"tag/长/index.html",revision:"49a1436a229d4c8cfb2a3d38e97d7873"},{url:"tag/页面配置/index.html",revision:"53a4fd7c412e3739d2cec9cb1650da66"},{url:"tag/黄/index.html",revision:"65ede9d2e45103208f72ee65cf6580f6"},{url:"timeline/index.html",revision:"b0fb6c563de5ebd8ab0c2b7353ece26b"},{url:"assets/hero-197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/images/cover1.jpg",revision:"1a661f8cca025ca27a846090c11b86ad"},{url:"assets/images/cover2.jpg",revision:"b228edd2b9054c83cb464d6b1ed8a4ae"},{url:"assets/images/cover3.jpg",revision:"88358b4d02ef94e59f1f563f38a94fad"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map