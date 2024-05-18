const questions = [{"q":"属下（字）","a":"禹"},{"q":"南平（字）","a":"十"},{"q":"外销（字）","a":"咄"},{"q":"左联（字）","a":"耳"},{"q":"自述（字）","a":"记"},{"q":"前科（字）","a":"禾"},{"q":"南市（字）","a":"巾"},{"q":"晚会（字）","a":"多"},{"q":"前锋（字）","a":"金"},{"q":"南京（字）","a":"小"},{"q":"游泳（字）","a":"汆"},{"q":"前辈（字）","a":"非"},{"q":"南货（字）","a":"贝"},{"q":"皇后（字）","a":"王"},{"q":"台南（字）","a":"口"},{"q":"断后（字）","a":"斤"},{"q":"岑南（字）","a":"今"},{"q":"复习（字）","a":"羽"},{"q":"东坡（字）","a":"皮"},{"q":"安南（字）","a":"女"},{"q":"海军（字）","a":"浜"},{"q":"东欧（字）","a":"欠"},{"q":"屏南（字）","a":"并"},{"q":"通宵（字）","a":"歹"},{"q":"东海（字）","a":"每"},{"q":"全南（字）","a":"王"},{"q":"古钱（字）","a":"错"},{"q":"东洋（字）","a":"羊"},{"q":"苏南（字）","a":"办"},{"q":"冬眠（字）","a":"螅"},{"q":"西施（字）","a":"方"},{"q":"苍南（字）","a":"仓"},{"q":"内阁（字）","a":"各"},{"q":"西域（字）","a":"土"},{"q":"西北（字）","a":"一"},{"q":"内圈（字）","a":"卷"},{"q":"西畴（字）","a":"田"},{"q":"鲁北（字）","a":"鱼"},{"q":"多头（字）","a":"夕"},{"q":"锦西（字）","a":"金"},{"q":"北票（字）","a":"西"},{"q":"舌头（字）","a":"千"},{"q":"鸡西（字）","a":"又"},{"q":"北齐（字）","a":"文"},{"q":"弯头（字）","a":"亦"},{"q":"江西（字）","a":"水"},{"q":"阿里（字）","a":"口"},{"q":"尽头（字）","a":"尺"},{"q":"南宁（字）","a":"丁"},{"q":"准点（字）","a":"淮"},{"q":"点头（字）","a":"占"},{"q":"南宋（字）","a":"木"},{"q":"再见（字）","a":"扮"},{"q":"空头（字）","a":"穴"},{"q":"南孚（字）","a":"子"},{"q":"嫁女（字）","a":"家"},{"q":"肩头（字）","a":"户"},{"q":"念头（字）","a":"今"},{"q":"箭头（字）","a":"竹"},{"q":"莲心（字）","a":"车"},{"q":"童心（字）","a":"田"},{"q":"问心（字）","a":"口"},{"q":"回心（字）","a":"口"},{"q":"无心（字）","a":"一"},{"q":"湖中（字）","a":"古"},{"q":"狱中（字）","a":"言"},{"q":"留底（字）","a":"田"},{"q":"冒尖（字）","a":"日"},{"q":"蛇尾（字）","a":"七"},{"q":"巷尾（字）","a":"巳"},{"q":"光脚（字）","a":"几"},{"q":"晃盖（字）","a":"曰"},{"q":"昂首（字）","a":"曰"},{"q":"屋顶（字）","a":"尸"},{"q":"外围（字）","a":"口"},{"q":"国内（字）","a":"玉"},{"q":"厅内（字）","a":"丁"},{"q":"衙内（字）","a":"吾"},{"q":"零下（字）","a":"令"},{"q":"笔下（字）","a":"毛"},{"q":"意下（字）","a":"心"},{"q":"后辈（字）","a":"车"},{"q":"后唐（字）","a":"口"},{"q":"后患（字）","a":"心"},{"q":"后劲（字）","a":"力"},{"q":"后汉（字）","a":"又"},{"q":"后肢（字）","a":"支"},{"q":"开始（字）","a":"一"},{"q":"甘心（字）","a":"一"},{"q":"虚心（字）","a":"七"},{"q":"究底（字）","a":"九"},{"q":"岸上（字）","a":"山"},{"q":"极右（字）","a":"及"},{"q":"极左（字）","a":"木"},{"q":"右倾（字）","a":"页"},{"q":"一撇（字）","a":"厂"},{"q":"一米（字）","a":"来"},{"q":"二个（字）","a":"竹"},{"q":"二直（字）","a":"干"},{"q":"二多（字）","a":"罗"},{"q":"三十（字）","a":"卉"},{"q":"三直（字）","a":"矗"},{"q":"四十（字）","a":"井"},{"q":"四直（字）","a":"置"},{"q":"四八（字）","a":"弄"},{"q":"五双（字）","a":"支"},{"q":"八十（字）","a":"木"},{"q":"八千（字）","a":"禾"},{"q":"十大（字）","a":"本"},{"q":"万点（字）","a":"方"},{"q":"工人（字）","a":"天"},{"q":"土山（字）","a":"击"},{"q":"大弓（字）","a":"夷"},{"q":"大手（字）","a":"拒"},{"q":"大脚（字）","a":"距"},{"q":"中和（字）","a":"串"},{"q":"中堂（字）","a":"口"},{"q":"中意（字）","a":"日"},{"q":"上品（字）","a":"口"},{"q":"上声（字）","a":"士"},{"q":"上古（字）","a":"十"},{"q":"上帝（字）","a":"六"},{"q":"上元（字）","a":"二"},{"q":"上界（字）","a":"田"},{"q":"上皇（字）","a":"白"},{"q":"下午（字）","a":"十"},{"q":"下方（字）","a":"万"},{"q":"下关（字）","a":"大"},{"q":"下落（字）","a":"洛"},{"q":"下海（字）","a":"母"},{"q":"下岗（字）","a":"冈"},{"q":"灭火（字）","a":"一"},{"q":"枯泉（字）","a":"白"},{"q":"哑谜（字）","a":"迷"},{"q":"赶走（字）","a":"干"},{"q":"干涸（字）","a":"固"},{"q":"缺粮（字）","a":"良"},{"q":"远走（字）","a":"元"},{"q":"洒水（字）","a":"西"},{"q":"退潮（字）","a":"朝"},{"q":"通天（字）","a":"夫"},{"q":"内心（字）","a":"人"},{"q":"内因（字）","a":"大"},{"q":"火腿（字）","a":"人"},{"q":"闪动（字）","a":"们"},{"q":"萌动（字）","a":"朝"},{"q":"缫丝（字）","a":"绌"},{"q":"静海（字）","a":"泞"},{"q":"爱辉（字）","a":"晌"},{"q":"本溪（字）","a":"源"},{"q":"一钩（字）","a":"丁"},{"q":"二中（字）","a":"串"},{"q":"二钩（字）","a":"于"},{"q":"九人（字）","a":"仇"},{"q":"十撇（字）","a":"千"},{"q":"大口（字）","a":"因"},{"q":"木床（字）","a":"麻"},{"q":"木排（字）","a":"林"},{"q":"对口（字）","a":"吕"},{"q":"合口（字）","a":"哈"},{"q":"出口（字）","a":"咄"},{"q":"可可（字）","a":"哥"},{"q":"皮衣（字）","a":"被"},{"q":"走了（字）","a":"辽"},{"q":"狠点（字）","a":"狼"},{"q":"菜田（字）","a":"蕃"},{"q":"石头（字）","a":"一"},{"q":"天上（字）","a":"一"},{"q":"目中（字）","a":"二"},{"q":"直心（字）","a":"三"},{"q":"罩上（字）","a":"四"},{"q":"吾首（字）","a":"五"},{"q":"上交（字）","a":"六"},{"q":"上士（字）","a":"十"},{"q":"上声（字）","a":"士"},{"q":"上房（字）","a":"户"},{"q":"泉下（字）","a":"水"},{"q":"拿下（字）","a":"手"},{"q":"前肢（字）","a":"目"},{"q":"前哨（字）","a":"口"},{"q":"前程（字）","a":"禾"},{"q":"东汉（字）","a":"又"},{"q":"鹿尾（字）","a":"比"},{"q":"华北（字）","a":"化"},{"q":"高中（字）","a":"口"},{"q":"冀中（字）","a":"田"},{"q":"鼻头（字）","a":"自"},{"q":"杀头（字）","a":"木"},{"q":"埋土（字）","a":"里"},{"q":"晨雨（字）","a":"震"},{"q":"对联（字）","a":"取"},{"q":"二五（字）","a":"干"},{"q":"五六（字）","a":"卉"},{"q":"六旬（字）","a":"朋"},{"q":"死心（字）","a":"忘"},{"q":"瓜种（字）","a":"孤"},{"q":"树种（字）","a":"李"},{"q":"葵花（字）","a":"晌"},{"q":"校对（字）","a":"政"},{"q":"同胞（字）","a":"捉"},{"q":"夜市（字）","a":"黩"},{"q":"聊斋（字）","a":"魂"},{"q":"缺点（字）","a":"占"},{"q":"海枯（字）","a":"每"},{"q":"剪刀（字）","a":"前"},{"q":"美味（字）","a":"呵"},{"q":"寿星（字）","a":"佬"},{"q":"变音（字）","a":"昱"},{"q":"住宅（字）","a":"倨"},{"q":"举首（字）","a":"兴"},{"q":"夕阳（字）","a":"晒"},{"q":"江姐（字）","a":"汝"},{"q":"八哥（字）","a":"兑"},{"q":"荒年（字）","a":"欲"},{"q":"芬芳（字）","a":"馥"},{"q":"单身（字）","a":"合"},{"q":"口技（字）","a":"呓"},{"q":"泰山（字）","a":"仗"},{"q":"下海（字）","a":"氽"},{"q":"渔民（字）","a":"沪"},{"q":"败诉（字）","a":"皓"},{"q":"军粮（字）","a":"粹"},{"q":"牛绳（字）","a":"纽"},{"q":"合龙（字）","a":"龛"},{"q":"点卯（字）","a":"卵"},{"q":"变项（字）","a":"贡"},{"q":"葱心（字）","a":"匆"},{"q":"爬树（字）","a":"橙"},{"q":"红人（字）","a":"赭"},{"q":"干洗（字）","a":"先"},{"q":"接客（字）","a":"俭"},{"q":"圣旨（字）","a":"玲"},{"q":"说卦（字）","a":"讣"},{"q":"同乡（字）","a":"做"},{"q":"大话（字）","a":"讵"},{"q":"水利（字）","a":"溢"},{"q":"幻觉（字）","a":"觑"},{"q":"土语（字）","a":"访"},{"q":"纯金（字）","a":"铨"},{"q":"元首（字）","a":"一"},{"q":"懿旨（字）","a":"诟"},{"q":"玉玺（字）","a":"璋"},{"q":"带头（字）","a":"卅"},{"q":"舌战（字）","a":"诤"},{"q":"陕西（字）","a":"夹"},{"q":"疯话（字）","a":"诳"},{"q":"芦根（字）","a":"户"},{"q":"报灾（字）","a":"谎"},{"q":"早上（字）","a":"曰"},{"q":"窗下（字）","a":"囱"},{"q":"兼语（字）","a":"谦"},{"q":"超生（字）","a":"侈"},{"q":"默读（字）","a":"卖"},{"q":"后檐（字）","a":"詹"},{"q":"和尚（字）","a":"侍"},{"q":"凶横（字）","a":"区"},{"q":"豫东（字）","a":"象"},{"q":"武库（字）","a":"创"},{"q":"再会（字）","a":"观"},{"q":"森林（字）","a":"楷"},{"q":"斩刑（字）","a":"刹"},{"q":"刊头（字）","a":"干"},{"q":"烟缸（字）","a":"盔"},{"q":"剑鞘（字）","a":"刨"},{"q":"俚曲（字）","a":"境","e":"土音儿"},{"q":"鼓掌（字）","a":"拿"},{"q":"先民（字）","a":"估"},{"q":"二合（字）","a":"芍","e":"一合为十勺"},{"q":"走运（字）","a":"云"},{"q":"一休（字）","a":"体"},{"q":"二角（字）","a":"芬"},{"q":"断臂（字）","a":"抚"},{"q":"东家（字）","a":"住"},{"q":"草包（字）","a":"苞"},{"q":"衰草（字）","a":"蓑"},{"q":"先烈（字）","a":"列"},{"q":"三七（字）","a":"开"},{"q":"西域（字）","a":"土"},{"q":"水兵（字）","a":"浜"},{"q":"调査（字）","a":"昧"},{"q":"拇战（字）","a":"批"},{"q":"稻子（字）","a":"浴"},{"q":"诞辰（字）","a":"星"},{"q":"转景（字）","a":"晾"},{"q":"国手（字）","a":"掴"},{"q":"水巷（字）","a":"港"},{"q":"衷心（字）","a":"中"},{"q":"拾草（字）","a":"搭"},{"q":"沙眼（字）","a":"渺"},{"q":"牛毛（字）","a":"牦"},{"q":"里拉（字）","a":"撞"},{"q":"弱水（字）","a":"溺"},{"q":"弊端（字）","a":"敝"},{"q":"手感（字）","a":"撼"},{"q":"润笔（字）","a":"瀚"},{"q":"斧头（字）","a":"父"},{"q":"后代（字）","a":"弋"},{"q":"后舵（字）","a":"它"},{"q":"臀尖（字）","a":"殿"},{"q":"猪嘴（字）","a":"咳"},{"q":"寒暄（字）","a":"宣"},{"q":"半庹（字）","a":"尺"},{"q":"告辞（字）","a":"运"},{"q":"中丞（字）","a":"水"},{"q":"岁末（字）","a":"夕"},{"q":"后妃（字）","a":"己"},{"q":"春雨（字）","a":"泰"},{"q":"九点（字）","a":"丸"},{"q":"二妞（字）","a":"姿"},{"q":"国内（字）","a":"玉"},{"q":"龙女（字）","a":"娠"},{"q":"吃亏（字）","a":"饮"},{"q":"黛玉（字）","a":"婪"},{"q":"黄袍（字）","a":"袭"},{"q":"耳食（字）","a":"饵"},{"q":"女审（字）","a":"婶"},{"q":"后盾（字）","a":"目"},{"q":"剩饭（字）","a":"馀"},{"q":"尖端（字）","a":"小"},{"q":"重瞳（字）","a":"瞬"},{"q":"心术（字）","a":"怵"},{"q":"文子（字）","a":"孜"},{"q":"鸭头（字）","a":"甲"},{"q":"动心（字）","a":"恸"},{"q":"瓜子（字）","a":"孤"},{"q":"灰心（字）","a":"恢"},{"q":"龙王（字）","a":"珑"},{"q":"心焦（字）","a":"憔"},{"q":"明君（字）","a":"琅"},{"q":"阎罗（字）","a":"瑰"},{"q":"金兔（字）","a":"铆"},{"q":"缺雨（字）","a":"污"},{"q":"标高（字）","a":"柰"},{"q":"金华（字）","a":"铧"},{"q":"水蛇（字）","a":"汜"},{"q":"乔木（字）","a":"桥"},{"q":"美金（字）","a":"镁"},{"q":"红河（字）","a":"洙"},{"q":"杉木（字）","a":"彬"},{"q":"真金（字）","a":"镇"},{"q":"无尺土之封（字）","a":"一"},{"q":"东魏（字）","a":"鬼"},{"q":"唇裂（字）","a":"痴"},{"q":"驼背（字）","a":"瘠"},{"q":"前端（字）","a":"立"},{"q":"窝头（字）","a":"穴"},{"q":"后腔（字）","a":"空"},{"q":"狗洞（字）","a":"突"},{"q":"衬裤（字）","a":"衲"},{"q":"狐裘（字）","a":"被"},{"q":"囚服（字）","a":"槛"},{"q":"合页（字）","a":"颌"},{"q":"蚁垤（字）","a":"蚯"},{"q":"妻子（字）","a":"肉"},{"q":"竹马（字）","a":"笃"},{"q":"毛竹（字）","a":"笔"},{"q":"舟山（字）","a":"舢"},{"q":"方舟（字）","a":"舫"},{"q":"黑船（字）","a":"舷"},{"q":"艄公（字）","a":"艘"},{"q":"绝后（字）","a":"色"},{"q":"大米（字）","a":"类"},{"q":"上唇（字）","a":"辰"},{"q":"龙口（字）","a":"唇"},{"q":"血书（字）","a":"赦"},{"q":"鸡丁（字）","a":"酊"},{"q":"大脚（字）","a":"距"},{"q":"知足（字）","a":"踟"},{"q":"驼背（字）","a":"躬"},{"q":"淫雨（字）","a":"霪"},{"q":"黑狗（字）","a":"默"},{"q":"一尺一（字）","a":"寺"},{"q":"二十户（字）","a":"芦"},{"q":"三滴水（字）","a":"淼"},{"q":"一头牛（字）","a":"生"},{"q":"二尺二（字）","a":"封"},{"q":"三丫头（字）","a":"兰"},{"q":"一对红（字）","a":"赫"},{"q":"二人行（字）","a":"徒"},{"q":"三十二（字）","a":"弄"},{"q":"一张弓（字）","a":"弹"},{"q":"二百天（字）","a":"荀"},{"q":"三张嘴（字）","a":"品"},{"q":"一万撇（字）","a":"厉"},{"q":"二月平（字）","a":"朋"},{"q":"十一郎（字）","a":"克"},{"q":"一月大（字）","a":"肤"},{"q":"二级林（字）","a":"桠"},{"q":"十升米（字）","a":"料"},{"q":"一会儿（字）","a":"兀"},{"q":"二十撇（字）","a":"升"},{"q":"十五日（字）","a":"胖"},{"q":"一直动（字）","a":"劫"},{"q":"二人转（字）","a":"徊"},{"q":"十日谈（字）","a":"询"},{"q":"一千金（字）","a":"婵"},{"q":"二点水（字）","a":"冰"},{"q":"十一日（字）","a":"旱"},{"q":"一半多（字）","a":"歹"},{"q":"二级蚌（字）","a":"资"},{"q":"十二月（字）","a":"青"},{"q":"一月平（字）","a":"且"},{"q":"二等米（字）","a":"粢"},{"q":"十二点（字）","a":"斗"},{"q":"一斤八（字）","a":"兵"},{"q":"三级材（字）","a":"柄"},{"q":"十八寸（字）","a":"村"},{"q":"三星期（字）","a":"昔"},{"q":"十八点（字）","a":"术"},{"q":"一夜红（字）","a":"殊"},{"q":"三十天（字）","a":"草"},{"q":"十三点（字）","a":"汁"},{"q":"一而再（字）","a":"冉"},{"q":"三石头（字）","a":"磊"},{"q":"十大横（字）","a":"土"},{"q":"一刀切（字）","a":"七"},{"q":"三套车（字）","a":"轰"},{"q":"十小横（字）","a":"士"},{"q":"一下子（字）","a":"了"},{"q":"十张嘴（字）","a":"叶"},{"q":"一连串（字）","a":"吕"},{"q":"三月小（字）","a":"消"},{"q":"一直去（字）","a":"云"},{"q":"三个二（字）","a":"奉"},{"q":"二千金（字）","a":"姿"},{"q":"三桅船（字）","a":"巡"},{"q":"四双手（字）","a":"扒"}

,{"q":"关张（国外小说名）","a":"红与黑"},{"q":"雹（外国文学家名）","a":"雨果"},{"q":"田（自然科学名词）","a":"重心"},{"q":"古为今用（明代一历史人物）","a":"史可法"},{"q":"文姬归汉（三字俗语）","a":"别胡来"},{"q":"个体户（字）","a":"豪","e":"一口之家"},{"q":"人人离座，座上无人（字）","a":"庄"},{"q":"俺家大人不在家（字）","a":"电"},{"q":"主动一点（字）","a":"玉"},{"q":"巧夺天工（字）","a":"人"},{"q":"去掉一直（字）","a":"云"},{"q":"太少了一点（字）","a":"大"},{"q":"砍掉了石头（字）","a":"欠"},{"q":"明天日全食（字）","a":"月"},{"q":"春节放假三天（字）","a":"日"},{"q":"论长论短莫多言（字）","a":"仑"},{"q":"走在上面，坐在下面（字）","a":"土"},{"q":"摘掉穷帽子，挖去穷根子（字）","a":"八"},{"q":"你有他有我没有，树有花有草没有（字）","a":"人"},{"q":"燕山有只燕，头尾全不见。心口送与人，翅膀更舒展。（字）","a":"北"},{"q":"指东话西（字）","a":"诣"},{"q":"开刀（字）","a":"刑"},{"q":"下大上小（字）","a":"尖"},{"q":"八人一口（字）","a":"谷"},{"q":"可上可下（字）","a":"哥"},{"q":"一心向上（字）","a":"志"},{"q":"又进村来（字）","a":"树"},{"q":"请勿人口（字）","a":"囫"},{"q":"一个加一个（字）","a":"笳"},{"q":"文言二十句（字）","a":"警"},{"q":"十一点进厂（字）","a":"压"},{"q":"二人顶三人（字）","a":"奏"},{"q":"取一半、送一半（字）","a":"联"},{"q":"歪尾巴羊长得丑（字）","a":"羞"},{"q":"不要头，单要尾（字）","a":"干"},{"q":"牛角上边来一刀（字）","a":"解"},{"q":"喜上眉梢（字）","a":"声"},{"q":"半部春秋（字）","a":"秦"},{"q":"屋顶微露三山间（字）","a":"崛"},{"q":"一寸少一点（字）","a":"于"},{"q":"挖西边补东边（字）","a":"扑"},{"q":"占座而不坐（字）","a":"店"},{"q":"功过各一半（字）","a":"边"},{"q":"良又少一点（字）","a":"艰"},{"q":"全家添一口（字）","a":"豪"},{"q":"来日是大暑（字）","a":"奢"},{"q":"春一半，夏一半（字）","a":"麦"},{"q":"你我各一半（字）","a":"伐"},{"q":"姜一半葱一半（字）","a":"恙"},{"q":"学上面，会下面（字）","a":"尝"},{"q":"记一半，忘一半（字）","a":"忌"},{"q":"有上一半，有下一半。除去一半，还有一半。（字）","a":"随"},{"q":"拒一半，服一半，二合一，你爱看（字）","a":"报"},{"q":"甜一半，辣一半（字）","a":"辞"},{"q":"少小离家老大回（字）","a":"夭"},{"q":"留尾去头加一半（字）","a":"哩"},{"q":"加上一直，减少一点。上下合作，行动方便。（字）","a":"步"},{"q":"千里来相会（字）","a":"骤"},{"q":"人面桃花相映红（字）","a":"赫"},{"q":"点水蜻蜓款款飞（字）","a":"汗"},{"q":"桃李满天下（字）","a":"夥"},{"q":"骨肉兄弟结伴并行（字）","a":"捉"},{"q":"血书（字）","a":"赦"},{"q":"风吹草低见牛羊（字）","a":"蓄"},{"q":"黛玉大喜（京剧名）","a":"快活林"},{"q":"昆明至上海航线（京剧名）","a":"飞云浦"},{"q":"太白猜谜（唐代一诗人名）","a":"李商隐"},{"q":"废话连篇（字）","a":"够"},{"q":"画时圆，写时方，寒时短，热时长。（字）","a":"日"},{"q":"一个大，一个小，一个跳，一个跑，一个吃肉，一个吃草。（字）","a":"骚"},{"q":"一字十一笔，无横又无直，学生问孔子，孔子说无味。（字）","a":"淡"},{"q":"年纪八十八，家家难离它，一日离开它，全家要饿傻。（字）","a":"米"},{"q":"三横三竖，能种红薯。（字）","a":"田"},{"q":"爿（字）","a":"版"},{"q":"明是水少，却说水多。（字）","a":"泛"},{"q":"一字有四笔，没横也没直，妈妈猜不着，爸爸笑嘻嘻。（字）","a":"父"},{"q":"斜月残灯，半明半灭（字）","a":"炙"},{"q":"野火烧不尽，春风吹又生（字）","a":"荐"},{"q":"一弯新月（诗句）","a":"此曲只应天上有"},{"q":"红楼梦（诗句）","a":"高枕石头眠"},{"q":"祝寿（诗句）","a":"但愿人长久"},{"q":"岳母刺字（常用语）","a":"背书"},{"q":"鲁达当和尚（成语）","a":"半路出家"},{"q":"正月十六办婚事（成语）","a":"喜出望外","e":"农历十五日为“望”"},{"q":"不怨天不怨地（常用语）","a":"怪人"},{"q":"出口货（六字口语）","a":"不中用的东西"}
,{"q":"啤酒厂出酒（字）","a":"碑"},{"q":"此由一直去（字）","a":"昆"}

,{"q":"无双春夜盼郎归（字）","a":"一","e":"“春”无“日”无“夫”"},{"q":"尾生死前犹念伊（字）","a":"一"},{"q":"舍空人迹叶翻飞（字）","a":"一"},{"q":"终生念伊减姿容（字）","a":"一"},{"q":"孟德放歌乌南飞（字）","a":"一","e":"“孟德”即“曹”，“歌”即“曲”，“乌”即“日”（古人认为太阳中有三足乌）"},{"q":"春雨连绵妻独宿（字）","a":"一"},{"q":"翻过重山川如带（字）","a":"一","e":"“重山”为“出”，将其翻过来，再加上“川”，就像是“带”了"},{"q":"拼命三郎死拼 短命二郎丧生（字）","a":"一","e":"抵消"},{"q":"恰似浮鹅叫一声（字）","a":"乙"},{"q":"OK开球棒也（字）","a":"ㄑ"},{"q":"春雨断桥人不度（字）","a":"二","e":"“断桥”象形为“一”"},{"q":"减负之声犹在耳（字）","a":"二"},{"q":"人间有此不平事（字）","a":"厂","e":"“不平”为“仄”，有“人”便是“仄”，“事”理解为“变故、变化”"},{"q":"宁可抛头颅 何可失人格（字）","a":"丁"},{"q":"折得柳条穿白鱼（字）","a":"卜","e":"象形，柳条为丨，白鱼为丶"},{"q":"治国有方三顾频（字）","a":"卜","e":"加上“口（方）”和“三”就是国"},{"q":"人间始暖报春知（字）","a":"三","e":"和“人”“日（始暖）”组成“春”，“间”作“参与”解"},{"q":"明日送春仍送客（字）","a":"三"},{"q":"夸大其辞必遭损 同流合污岂受益（字）","a":"亏"},{"q":"一介不以与人（字）","a":"丌"},{"q":"小桥水泻掩雨声（字）","a":"与"},{"q":"东南西北燕分飞（字）","a":"口"},{"q":"甜咸苦辣各味俱全（字）","a":"口"},{"q":"空阔水边无问处（字）","a":"千"},{"q":"一见倾心共死生（字）","a":"夕"},{"q":"水流绝涧终日（字）","a":"门"},{"q":"一旦不能有 输来其间（字）","a":"门"},{"q":"人民币二分（字）","a":"丫"},{"q":"一泓清水荡孤山（字）","a":"弓","e":"“孤山”象形为“厶”"},{"q":"佞人应与仁人别（字）","a":"女"},{"q":"秀发翻翘佩蝶花（字）","a":"飞","e":"“发翻翘”象形为“乙”，“蝶花”象形为“ㄑ”"},{"q":"叠叠远山望觉微（字）","a":"幺","e":"“远山”象形为“厶”，“望觉微”提义"},{"q":"工人组织是工会（字）","a":"云"},{"q":"泪尽湘江江自流（字）","a":"木"},{"q":"一言诀别人当去 敢将此头作倒悬（字）","a":"互","e":"“诀”去掉“言”“人”，“敢”前两笔颠倒，组合成字"},{"q":"一片丹心留人间（字）","a":"太"},{"q":"石不能言最可人（字）","a":"仄","e":"“石”去掉“口（不能言）”，和“人”组合（“最”有聚合的意思）"},{"q":"那人却在灯火阑珊处（字）","a":"仃"},{"q":"添得画中神州秀 借来苑上月桂香（字）","a":"化","e":"加“十（画中）”为“华”，加“艹（苑上）”为“花”"},{"q":"刘备一死星陨落（字）","a":"刈"},{"q":"竹外一枝斜更好（字）","a":"介","e":"“个”形似竹叶"},{"q":"画眉深浅巧费工（字）","a":"兮","e":"“画眉深浅”为“八”，“巧费工”为“丂”"},{"q":"画眉深浅巧费工（字）","a":"兮","e":"“画眉深浅”为“八”，“巧费工”为“丂”"}
,{"q":"二人当真要动手（二字搏击名词）","a":"直拳","e":"“二人真手”笔画重组"},{"q":"清泉之水煎茶，约人前去一住（水果）","a":"香蕉","e":"“泉”清掉“水”，“煎茶”约掉“人前”"},{"q":"只有猪八戒，没有漱口水（症状）","a":"咳嗽","e":"“猪”借代为“亥”，“只亥”去掉“八”，“漱口”去掉“水”"},{"q":"萍水相逢，裹衣相赠（品牌）","a":"苹果"},{"q":"天宫赐福后，直上晃荡游（航天员）","a":"叶光富","e":"天宫取“宀”，与福的后部组成“富”，“晃荡”成“口”、“一”、“光”，“口”、“一”与“丨”（直）组成叶"},{"q":"原先在地质工作（9笔字）","a":"项","e":"原先取“一”、“丿”，地质取“贝”，“工”+“一”+“丿”+“贝”=项"},{"q":"工作二日显亲切（麻将术语）","a":"暗杠","e":"“亲”切开成“立”、“木”，“立”与二“日”组成“暗”，“木”+“工”=“杠”"},{"q":"奇柏参差人醉卧，明月消沉客归心（多笔字一）","a":"馥","e":"“奇柏参差”取“香”，“人醉卧”取“”，“明月消沉”取“日”，“客归心”到“夂”，香、、日、夂组成馥。"},{"q":"回扣乱取留案底（字）","a":"操","e":"“回扣乱取”即“回扣”两字打乱，再与“木”（“案底”扣“木”）重组成“操”"},{"q":"林间花白，满树芬芳（中药）","a":"木香","e":"前句离合，后句会意"},{"q":"几度沉迷《与凤行》（二字学生写作业情况）","a":"没写","e":"沉-几+与+凤=没写"},{"q":"先烈忠心须发扬（2字灯谜用语）","a":"列中","e":"“先烈”取“列”，“忠心须发扬”取“中”"},{"q":"专门派人先联系（2字词）","a":"传闻","e":"“专/门”明企，“人”取“亻”，“先联”取“耳”，“系”做抱合，组合得底"},{"q":"吕先生未了心愿（2字餐饮名词）","a":"原味","e":"“吕先生”取“口”，“未”明企，“了心愿”将“愿”的“心”消减剩“原”，组合得底"},{"q":"立夏后，日照增加贡献（省区别称）","a":"赣","e":"“夏后”取“夂”，“加”扣“十”（加号），立+日+十+夂+贡=赣"},{"q":"上车交流少（2字省级行政区）","a":"广东","e":"“上车交”即是取“车”、“交”的上部“七”、“亠”，“少”流动成“小”、“丿”，亠+丿=广，七+小=东。"},{"q":"居其位当尽苦心（13笔字）","a":"蓓"},{"q":"芳草迷离接六桥（10笔字）","a":"旁","e":"芳-艹+六+冖（桥象形冖）=旁"},{"q":"马航MH370失联（3字军事装备）","a":"无人机","e":"飞机失联意味着人和飞机都找不到了，拢意得底"},{"q":"正式开工迎财到（2字词）","a":"才赋","e":"“正式开工”在“正式”二字中消减“工”，剩余字素组合成“武”，“财”明企，组合得底"},{"q":"安抚之后得宽心（7笔字)","a":"芜"},{"q":"明月清辉映半空（2字大气光学现象）","a":"日晕"},{"q":"自友离站时念起（4字历法用语）","a":"今日立夏","e":"“自”与“友”离开组成“夏”，“站时念起”取“立日今”"},{"q":"楚地多虫非谎言（2023年2字台湾现象)","a":"蛋荒"},{"q":"早晚不消费（3字植物俗称）","a":"午时花"},{"q":"初茶上新胜从前（2字人事名词）","a":"月薪"},{"q":"包头司法局（四字出版词）","a":"封面设计"},{"q":"不可全抛一片心（四字考试用语）","a":"每道三分","e":"承上句“逢人只说三分话”"},{"q":"朕，心系民生取民心（泊人）","a":"关胜"},{"q":"讴歌称赞后，生产更主动（外政要）","a":"欧尔班","e":"“讴歌称”赞后取“区欠尔”，“生”更改与“主”动组合成“班”"},{"q":"站前携手去江西（2024年外热点地名）","a":"拉法"},{"q":"又到微风起处，一草一木飘香（3字女演员）","a":"林夏薇","h":"出演过《收规华》"},{"q":"母亲护士齐告捷（4字成语）","a":"节节胜利","h":"2024年的灯谜"},{"q":"“禁诉令”（2024电视剧）","a":"不可告人","h":"也是四字成语"},{"q":"皮旅中原建新功（10笔字）","a":"破","e":"“皮”明企，“中原建新”将“原”中部“白”重组为“石”，组合得底"}



// 带格
,{"q":"公瑾久忧愁（徐妃穿衣格）","a":"周长惆怅"},{"q":"理工学院多是小伙（称谓冠性别，1+2，卷帘格)","a":"女少校","e":"“理工学院”扣“校”，多是小伙即很少女的，扣“少女”，依卷帘格倒读得底"}
];
//{"q":"雪岭","a":"讪"},{"q":"游资（字）","a":"街"},{"q":"堤岸（字）","a":"谤"},{"q":"淄河（字）","a":"济"},{"q":"拔泉（字）","a":"浔"},{"q":"掌故（字）","a":"扼"},{"q":"海菜（字）","a":"淆"},{"q":"衡山（字）","a":"狱"},{"q":"白灰（字）","a":"礁"},{"q":"太阳（字）","a":"钨"},{"q":"户蠹（字）","a":"闽"},{"q":"黔阳（字）","a":"黑"},{"q":"四下全","a":"匹"}