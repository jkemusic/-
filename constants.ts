
import { CardType, Character, Faction, GameCard, RuleSection } from './types';

export const SYSTEM_INSTRUCTION = `你是自製「火柴人三國殺」桌遊的規則裁判。
規則基於使用者提供的手寫筆記圖片。
核心規則：
- 殺：每回合限用 1 次。對目標造成 1 點傷害。
- 閃：抵消【殺】的效果。
- 桃：回復 1 點體力。瀕死時可使用。
- 距離：預設距離為 1。
- 身份：主公、反賊、忠臣、內奸。

特殊規則與卡牌：
- 擴充卡牌：投桃報李、鴻門宴、孤注一擲、增兵減灶、調虎離山、拋磚引玉、出其不意等，請依據角色技能中的描述進行推斷。
- 翻面：將武將牌翻轉，跳過下一回合。
- 覺醒/變身：依據描述執行。

角色技能 (完全基於手寫圖片)：
請參考 CHARACTERS 列表中的技能描述。這些技能優先級高於一般規則。
若技能描述模糊，請依據文字最可能的含義解釋 (例如 "殺用桃" 解釋為 "殺可以當作桃使用")。

請嚴格根據這些自製規則回答問題。`;

export const CARDS: GameCard[] = [
  { id: '1', name: '殺', type: CardType.BASIC, description: '對攻擊範圍內的目標造成 1 點傷害。每回合限用 1 次。' },
  { id: '2', name: '閃', type: CardType.BASIC, description: '抵消一張對你使用的【殺】。' },
  { id: '3', name: '桃', type: CardType.BASIC, description: '回復 1 點體力。若有角色瀕死可立即使用。' },
  { id: '4', name: '酒', type: CardType.BASIC, description: '下一張【殺】傷害 +1 或 瀕死時回復 1 點體力。' },
  { id: '5', name: '過河拆橋', type: CardType.SCROLL, description: '棄置目標區域裡的一張牌。' },
  { id: '6', name: '順手牽羊', type: CardType.SCROLL, description: '獲得距離 1 以內目標的一張牌。' },
  { id: '7', name: '決鬥', type: CardType.SCROLL, description: '目標與使用者輪流打出【殺】。首先不出【殺】的一方受到 1 點傷害。' },
  { id: '8', name: '無中生有', type: CardType.SCROLL, description: '摸 2 張牌。' },
  { id: '9', name: '南蠻入侵', type: CardType.SCROLL, description: '所有其他角色需打出一張【殺】，否則受到 1 點傷害。' },
  { id: '10', name: '萬箭齊發', type: CardType.SCROLL, description: '所有其他角色需打出一張【閃】，否則受到 1 點傷害。' },
  { id: '11', name: '桃園結義', type: CardType.SCROLL, description: '所有角色回復 1 點體力。' },
  { id: '12', name: '五穀豐登', type: CardType.SCROLL, description: '亮出 X 張牌（X為存活人數）。每人依序挑選一張。' },
  { id: '13', name: '樂不思蜀', type: CardType.SCROLL, description: '判定。若不為紅心，跳過出牌階段。' },
  { id: '14', name: '兵糧寸斷', type: CardType.SCROLL, description: '判定。若不為梅花，跳過摸牌階段。' },
  { id: '15', name: '閃電', type: CardType.SCROLL, description: '判定。若為黑桃 2-9，受到 3 點雷屬性傷害。' },
  { id: '16', name: '諸葛連弩', type: CardType.WEAPON, description: '範圍 1。你使用【殺】無次數限制。' },
  { id: '17', name: '青釭劍', type: CardType.WEAPON, description: '範圍 2。無視目標防具。' },
  { id: '18', name: '丈八蛇矛', type: CardType.WEAPON, description: '範圍 3。可以將兩張手牌當作一張【殺】使用。' },
  { id: '19', name: '青龍偃月刀', type: CardType.WEAPON, description: '範圍 3。當你使用的【殺】被【閃】抵消時，可以立即對相同的目標再使用一張【殺】。' },
  { id: '20', name: '貫石斧', type: CardType.WEAPON, description: '範圍 3。目標出【閃】時，可棄兩張牌強制命中。' },
  { id: '21', name: '方天畫戟', type: CardType.WEAPON, description: '範圍 4。若這是你最後一張手牌，可指定最多 3 個目標。' },
  { id: '22', name: '麒麟弓', type: CardType.WEAPON, description: '範圍 5。命中時可棄置目標的一張坐騎牌。' },
  { id: '23', name: '八卦陣', type: CardType.ARMOR, description: '每當你需要使用或打出【閃】時，可以進行判定：若結果為紅色，視為你使用或打出了一張【閃】。' },
  { id: '24', name: '仁王盾', type: CardType.ARMOR, description: '黑色的【殺】對你無效。' },
  { id: '25', name: '赤兔', type: CardType.MOUNT, description: '進攻馬 (-1 距離)。' },
  { id: '26', name: '絕影', type: CardType.MOUNT, description: '防禦馬 (+1 距離)。' },
  { id: '27', name: '投桃報李', type: CardType.SCROLL, description: '擴充卡牌：通常效果為抽一張牌並幫別人回一血。' },
  { id: '28', name: '鴻門宴', type: CardType.SCROLL, description: '擴充卡牌：所有玩家需打出一張殺，否則受到傷害。' },
  { id: '29', name: '孤注一擲', type: CardType.SCROLL, description: '擴充卡牌：判定，若為紅色則獲得收益，黑色則受到懲罰。' },
  { id: '30', name: '增兵減灶', type: CardType.SCROLL, description: '擴充卡牌：抽牌並可能跳過下個階段。' },
  { id: '31', name: '調虎離山', type: CardType.SCROLL, description: '擴充卡牌：本回合不成為目標，也不參與結算。' },
  { id: '32', name: '拋磚引玉', type: CardType.SCROLL, description: '擴充卡牌：棄一張牌，若有玩家給你牌，則你抽兩張。' },
  { id: '33', name: '出其不意', type: CardType.SCROLL, description: '擴充卡牌：展示一張手牌，若比點成功則造成傷害。' },
];

// 圖片請放在 public/images/ 資料夾下，並命名為 "中文名稱.jpg"
export const CHARACTERS: Character[] = [
  // --- 群雄 (Qun) ---
  {
    id: 'li_ru',
    name: '李儒',
    faction: Faction.QUN,
    health: 3,
    imageUrl: '/images/李儒.jpg',
    skills: ['1. 每回合你可以令一名玩家出一張閃否則受到一點火焰傷害', '2. 你可以將所有屬性殺當作火攻使用', '3. 當你偽裝時，殺可用桃']
  },
  {
    id: 'hua_tuo',
    name: '華佗',
    faction: Faction.QUN,
    health: 3,
    imageUrl: '/images/華佗.jpg',
    skills: ['1. 在你的回合外，紅色牌=桃', '2. 在你的回合內，殺可當桃使用', '3. 你不曾成為決鬥、南蠻入侵、萬箭齊發的對象']
  },
  {
    id: 'gongsun_zan',
    name: '公孫瓚',
    faction: Faction.QUN,
    health: 4,
    imageUrl: '/images/公孫瓚.jpg',
    skills: ['1. 當2血以上時，距離-1；當2血以下時，距離+1', '2. 閃可以當調虎離山使用']
  },
  {
    id: 'gongsun_yuan',
    name: '公孫淵',
    faction: Faction.QUN,
    health: 4,
    imageUrl: '/images/公孫淵.jpg',
    skills: ['1. 你可以展示你所有的手牌，然後抽2張牌(一回合一次)', '2. 如果你被使用基本牌，下一回合你將獲得他的技能直到回合結束']
  },
  {
    id: 'wang_yun',
    name: '王允',
    faction: Faction.QUN,
    health: 3,
    imageUrl: '/images/王允.jpg',
    skills: ['1. 殺對你無效，若有人出殺-1血 (可閃)', '2. 一回合一次，你可以令全部人捨棄自己的手牌重抽']
  },
  {
    id: 'guo_tu_feng_ji',
    name: '郭圖&逢紀',
    faction: Faction.QUN,
    health: 3,
    imageUrl: '/images/郭圖&逢紀.jpg',
    skills: ['1. 你這一回合能出殺的次數=你的血量', '2. 當別人使用偽裝時，你可以在你的下個回合變成那個武將(一次性)']
  },
  {
    id: 'yuan_shu',
    name: '袁術',
    faction: Faction.QUN,
    health: 4,
    imageUrl: '/images/袁術.jpg',
    skills: ['1. 若你的牌被捨棄(判定成功也是)時，其他人也要捨棄1張自己區的牌，不出的話-1血 (可閃)', '2. 你每出一張殺就扣自己的血']
  },
  {
    id: 'meng_huo',
    name: '孟獲',
    faction: Faction.QUN,
    health: 4,
    imageUrl: '/images/孟獲.jpg',
    skills: ['1. 如果你這一回合出了錦囊牌，結束階段你會扣1血 (不包含自己出的)', '2. 所有對人造成傷害的牌，你可以獲得', '3. 你手牌上限手牌數=血量']
  },
  {
    id: 'zuo_ci',
    name: '左慈',
    faction: Faction.QUN,
    health: 3,
    imageUrl: '/images/左慈.jpg',
    skills: ['1. 每回合化身不同角色 (每回合可化身為不同角色)', '2. 沒牌時可以將所有武將牌洗回']
  },
  {
    id: 'yan_liang_wen_chou',
    name: '顏良&文醜',
    faction: Faction.QUN,
    health: 4,
    imageUrl: '/images/顏良&文醜.jpg',
    skills: ['1. 使用牌沒有距離限制', '2. 當你沒防具時，視為裝備仁王盾']
  },
  {
    id: 'hua_xiong',
    name: '華雄',
    faction: Faction.QUN,
    health: 6,
    imageUrl: '/images/華雄.jpg',
    skills: ['1. 你有六血', '2. 如果你被扣血，他可判定: 紅: 回血 黑: 抽1張牌', '3. 抽牌時可抽5張牌']
  },
  {
    id: 'liu_xie',
    name: '劉協',
    faction: Faction.QUN,
    health: 3,
    imageUrl: '/images/劉協.jpg',
    skills: ['1. 別人要用屬性傷害才能對你造成傷害', '2. 每次你的回合別人需要棄1張手牌，否則扣一血', '3. 殺可以當南蠻入侵']
  },
  {
    id: 'zhang_jiao',
    name: '張角',
    faction: Faction.QUN,
    health: 3,
    imageUrl: '/images/張角.jpg',
    skills: ['1. 一回合一次，你可以捨棄X張牌，回X血', '2. 殺可以當南蠻入侵']
  },
  {
    id: 'kong_rong',
    name: '孔融',
    faction: Faction.QUN,
    health: 3,
    imageUrl: '/images/孔融.jpg',
    skills: ['1. 你可以在你的回合或別人回合使用一次: 你可以拿你的X張手牌重鑄 (抽到黑抽1張牌, 紅: 回1血)', '2. 投桃報李只能令你回血']
  },
  {
    id: 'lu_bu',
    name: '呂布',
    faction: Faction.QUN,
    health: 5,
    imageUrl: '/images/呂布.jpg',
    skills: ['1. 無雙：你使用殺需要兩張閃才能抵消', '2. 決鬥時，你需要打出兩張殺', '3. 你可以把一張殺當兩張殺使用']
  },
  {
    id: 'diao_chan',
    name: '貂蟬',
    faction: Faction.QUN,
    health: 3,
    imageUrl: '/images/貂蟬.jpg',
    skills: ['1. 離間：出牌階段，可棄一張牌令兩名男性角色決鬥', '2. 閉月：結束階段，可以抽一張牌']
  },
  {
    id: 'dong_zhuo',
    name: '董卓',
    faction: Faction.QUN,
    health: 8,
    imageUrl: '/images/董卓.jpg',
    skills: ['1. 你有8滴血', '2. 酒池：你可以將黑桃手牌當酒使用', '3. 崩壞：回合結束時，若你血量大於4，扣1血']
  },
  {
    id: 'yuan_shao',
    name: '袁紹',
    faction: Faction.QUN,
    health: 4,
    imageUrl: '/images/袁紹.jpg',
    skills: ['1. 亂擊：你可以將兩張相同花色的手牌當萬箭齊發使用', '2. 血裔：每有一名群雄角色，手牌上限+2']
  },
  {
    id: 'jia_xu',
    name: '賈詡',
    faction: Faction.QUN,
    health: 3,
    imageUrl: '/images/賈詡.jpg',
    skills: ['1. 完殺：你的回合內，只有你可以使用桃', '2. 亂武：限定技，所有其他角色需對距離最近的角色使用殺，否則扣1血', '3. 帷幕：黑色錦囊對你無效']
  },
  {
    id: 'chen_gong',
    name: '陳宮',
    faction: Faction.QUN,
    health: 3,
    imageUrl: '/images/陳宮.jpg',
    skills: ['1. 明策：出牌階段，可交給一名角色一張裝備或殺，令其視為使用一張殺', '2. 智遲：受傷後，本回合直到結束，殺或錦囊對你無效']
  },
  {
    id: 'cai_wen_ji',
    name: '蔡文姬',
    faction: Faction.QUN,
    health: 3,
    imageUrl: '/images/蔡文姬.jpg',
    skills: ['1. 悲歌：一名角色受傷時，判定：紅心回血，方塊摸2，黑桃翻面，梅花棄2', '2. 斷腸：殺死你的角色失去所有技能']
  },
  {
    id: 'xu_you',
    name: '許攸',
    faction: Faction.QUN,
    health: 3,
    imageUrl: '/images/許攸.jpg',
    skills: ['1. 恃才：使用牌後可將該牌置於牌堆頂，然後摸一張牌', '2. 成略：你可以將同花色的手牌當無中生有使用(一回合一次)']
  },
  {
    id: 'tian_feng',
    name: '田豐',
    faction: Faction.QUN,
    health: 3,
    imageUrl: '/images/田豐.jpg',
    skills: ['1. 死諫：當你失去最後一張手牌時，你可以棄置一名角色的一張牌', '2. 隨勢：當其他角色進入瀕死或死亡時，你可以抽一張牌']
  },
  {
    id: 'gao_shun',
    name: '高順',
    faction: Faction.QUN,
    health: 4,
    imageUrl: '/images/高順.jpg',
    skills: ['1. 陷陣：拼點，贏了之後這回合你的殺無視距離且不可閃避', '2. 禁酒：你不能用酒']
  },
  {
    id: 'ju_shou',
    name: '沮授',
    faction: Faction.QUN,
    health: 3,
    imageUrl: '/images/沮授.jpg',
    skills: ['1. 漸營：當你使用的牌與上一張花色相同，摸一張牌', '2. 矢北：受到傷害後，若本回合第一次受傷則回1血，否則再扣1血']
  },
  {
    id: 'ji_ling',
    name: '紀靈',
    faction: Faction.QUN,
    health: 4,
    imageUrl: '/images/紀靈.jpg',
    skills: ['1. 雙刃：出牌階段開始，可與人拼點，若你贏對方不能出殺，若你輸你不能出殺', '2. 你的武器距離+1']
  },
  {
    id: 'zhang_ren',
    name: '張任',
    faction: Faction.QUN,
    health: 4,
    imageUrl: '/images/張任.jpg',
    skills: ['1. 穿心：當你的殺被閃避，對方需棄置裝備或扣1血', '2. 埋伏：你可以棄一張牌令錦囊無效']
  },

  // --- 蜀 (Shu) ---
  {
    id: 'zhang_song',
    name: '張松',
    faction: Faction.SHU,
    health: 3,
    imageUrl: '/images/張松.jpg',
    skills: ['1. 自己的每回合一次，你可以指定一名玩家，若那位玩家死亡(在一輪內)，你和那名殺死他的玩家各抽4張牌，否則-1血(那個)']
  },
  {
    id: 'guan_xing',
    name: '關興',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/關興.jpg',
    skills: ['1. 單一對象錦囊牌會對除了你的其他人有效', '2. 你可以在別人回合中，棄掉2張同名卡，此回合你免疫選定(?)']
  },
  {
    id: 'liu_shan',
    name: '劉禪',
    faction: Faction.SHU,
    health: 3,
    imageUrl: '/images/劉禪.jpg',
    skills: ['1. 在遊戲中1次，你可以令1名玩家棄掉所有的牌並下次跳過他的回合', '2. 全部人的手牌最多3張，每多1張扣1血 (回合結束)']
  },
  {
    id: 'zhang_bao_solo',
    name: '張苞',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/張苞.jpg',
    skills: ['1. 一回合一次，你可以把你的2張手牌和別人2張交換', '2. 你可以一次擁有另一位玩家的技能 (那一位玩家死後發動)']
  },
  {
    id: 'zhuge_liang',
    name: '諸葛亮',
    faction: Faction.SHU,
    health: 3,
    imageUrl: '/images/諸葛亮.jpg',
    skills: ['1. 空城：你沒有手牌時不扣血也不會成為錦囊對象', '2. 觀星：回合開始時觀看牌堆頂5張牌', '3. 你沒有防具時，等於你裝備八卦陣']
  },
  {
    id: 'ma_su',
    name: '馬謖',
    faction: Faction.SHU,
    health: 3,
    imageUrl: '/images/馬謖.jpg',
    skills: ['1. 抽牌判定: 紅心:多抽一張 (無限制)', '2. 當你死亡時，殺你的人棄掉所有的牌']
  },
  {
    id: 'zhou_cang',
    name: '周倉',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/周倉.jpg',
    skills: ['1. 你可以再進行一次抽牌階段，但你在出牌階段只可以出基本牌', '2. 只要你受到傷害，都可以出相等傷害量的閃來抵擋']
  },
  {
    id: 'zhang_ni',
    name: '張嶷',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/張嶷.jpg',
    skills: ['1. 在你的回合開始前，你可以和別人同時展現一張手牌。若顏色相同，他扣一血吸之我回一血', '2. 當你一血時，殺可以當閃']
  },
  {
    id: 'zhang_fei',
    name: '張飛',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/張飛.jpg',
    skills: ['1. 咆哮：1回合可出無限張殺', '2. 你一回合最多扣2血', '3. 當別人使用無中生有時你也可以抽2張']
  },
  {
    id: 'wei_yan',
    name: '魏延',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/魏延.jpg',
    skills: ['1. 狂骨：當你對別人造成傷害時，你可以抽1張牌或回1血', '2. 延時性錦囊牌對你無效，閃電直接跳過你']
  },
  {
    id: 'ma_liang',
    name: '馬良',
    faction: Faction.SHU,
    health: 3,
    imageUrl: '/images/馬良.jpg',
    skills: ['1. 當你抽牌階段時，你可以把抽到的牌至少1張交給另一名玩家，這樣他就多一個出牌階段，如果他沒有出那張牌，他就扣一血', '2. 當你沒有牌時，你不會受到任何屬性傷害']
  },
  {
    id: 'li_yan',
    name: '李嚴',
    faction: Faction.SHU,
    health: 3,
    imageUrl: '/images/李嚴.jpg',
    skills: ['1. 你不會被兵糧寸斷', '2. 當你抽到或別人使用延時性錦囊牌時，你可以抽2張牌', '3. 五穀豐登你可以拿2張牌']
  },
  {
    id: 'jiang_wei',
    name: '姜維',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/姜維.jpg',
    skills: ['1. 挑釁：你在棄牌階段棄的張數 = 你下回合可以多抽的張數 (最多4張)', '2. 覺醒：當你沒有手牌時，血量上限+1並回復1血']
  },
  {
    id: 'liu_chen',
    name: '劉諶',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/劉諶.jpg',
    skills: ['1. 你可以少抽1張牌，這回合你的手牌都可以當決鬥使用，若決鬥使別人扣血，此技能無效', '2. 當你使用決鬥別人扣血後，你和他各抽1張牌']
  },
  {
    id: 'huang_zhong',
    name: '黃忠',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/黃忠.jpg',
    skills: ['1. 烈弓：如果你這一回合不出牌，你回1血', '2. 你的殺不可被閃避 (當你手牌數大於/小於對方血量時)']
  },
  {
    id: 'zhao_yun',
    name: '趙雲',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/趙雲.jpg',
    skills: ['1. 龍膽：殺當閃，閃當殺', '2. 每一回合可以使1名玩家棄1張手牌否則扣1滴血 (可閃)', '3. 你不會成為順手牽羊、樂不思蜀的對象']
  },
  {
    id: 'yi_ji',
    name: '伊籍',
    faction: Faction.SHU,
    health: 3,
    imageUrl: '/images/伊籍.jpg',
    skills: ['1. 機捷：你可以丟2張牌，抽1張牌或回一血', '2. 1技能可以在別人回合用', '3. 手牌無上限']
  },
  {
    id: 'liu_bei',
    name: '劉備',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/劉備.jpg',
    skills: ['1. 仁德：你可以把手牌給別人，1張回1血', '2. 若你給出的牌是錦囊牌，你獲得一個「仁」標記', '3. 當你有3個「仁」標記，可以幫某1玩家回1血', '4. 當你有3個「仁」標記時，你不會成為殺的對象']
  },
  {
    id: 'ma_chao',
    name: '馬超',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/馬超.jpg',
    skills: ['1. 馬術：距離始終 -1', '2. 鐵騎：判定，若為紅色，你的殺不可被閃避', '3. 紅色錦囊牌當殺使用 (紅)']
  },
  {
    id: 'guan_yu',
    name: '關羽',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/關羽.jpg',
    skills: ['1. 武聖：所有紅色牌都可以當作殺使用', '2. 義絕：你可以拼點，贏了對方不能出閃，輸了對方回血']
  },
  {
    id: 'pang_tong',
    name: '龐統',
    faction: Faction.SHU,
    health: 3,
    imageUrl: '/images/龐統.jpg',
    skills: ['1. 連環：你可以將梅花手牌當鐵索連環使用', '2. 涅槃：瀕死時，棄置所有牌，回復至3血，摸3張牌 (限定技)']
  },
  {
    id: 'fa_zheng',
    name: '法正',
    faction: Faction.SHU,
    health: 3,
    imageUrl: '/images/法正.jpg',
    skills: ['1. 眩惑：你可以令一名角色摸兩張牌，然後該角色需交給你一張紅桃手牌', '2. 恩怨：你給別人牌時摸一張；別人傷你時，需給你一張紅桃牌否則扣1血']
  },
  {
    id: 'guan_ping',
    name: '關平',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/關平.jpg',
    skills: ['1. 龍吟：當隊友出殺時，你可以棄置一張牌令該殺不計入次數', '2. 忠義：你出的殺傷害+1']
  },
  {
    id: 'huang_yue_ying',
    name: '黃月英',
    faction: Faction.SHU,
    health: 3,
    imageUrl: '/images/黃月英.jpg',
    skills: ['1. 集智：每當你使用錦囊牌時，摸一張牌', '2. 奇才：使用錦囊牌無距離限制']
  },
  {
    id: 'jiang_wan_fei_yi',
    name: '蔣琬&費禕',
    faction: Faction.SHU,
    health: 3,
    imageUrl: '/images/蔣琬&費禕.jpg',
    skills: ['1. 生息：若你本回合未造成傷害，結束時摸兩張牌', '2. 守成：當有角色死亡時，你可以摸一張牌']
  },
  {
    id: 'meng_da',
    name: '孟達',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/孟達.jpg',
    skills: ['1. 求安：當你成為殺的目標時，你可以令另一名角色摸一張牌，然後替你成為目標', '2. 量反：覺醒技，回合開始時若你手牌數大於血量...']
  },
  {
    id: 'liu_feng',
    name: '劉封',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/劉封.jpg',
    skills: ['1. 陷嗣：你可以將別人的兩張牌逆轉為你的殺', '2. 若你殺死了隊友，你的所有屬性+1']
  },
  {
    id: 'guan_suo',
    name: '關索',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/關索.jpg',
    skills: ['1. 征南：每當有角色死亡，你摸3張牌並獲得技能「武聖」', '2. 擷芳：你的紅色殺不計入次數']
  },
  {
    id: 'xu_shu',
    name: '徐庶',
    faction: Faction.SHU,
    health: 3,
    imageUrl: '/images/徐庶.jpg',
    skills: ['1. 無言：你免疫所有錦囊牌的傷害', '2. 舉薦：結束階段，棄一張牌令一名角色抽2張']
  },
  {
    id: 'yan_yan',
    name: '嚴顏',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/嚴顏.jpg',
    skills: ['1. 據戰：若你受到傷害，下回合出殺次數+1', '2. 轉換：你可以將紅色的基本牌當閃使用']
  },
  {
    id: 'liao_hua',
    name: '廖化',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/廖化.jpg',
    skills: ['1. 當你處於瀕死狀態時，你可以立即回復至 4 點體力 (一局限一次)', '2. 你的【閃】可以當【殺】使用']
  },
  {
    id: 'ma_dai',
    name: '馬岱',
    faction: Faction.SHU,
    health: 4,
    imageUrl: '/images/馬岱.jpg',
    skills: ['1. 潛襲：當你的【殺】造成傷害時，你可以防止此傷害，改為令目標減 1 點體力上限', '2. 你的【殺】無法被【閃】抵消']
  },

  // --- 魏 (Wei) ---
  {
    id: 'xiahou_dun',
    name: '夏侯惇',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/夏侯惇.jpg',
    skills: ['1. 剛烈：若殺成功使別人扣血判定: 紅:我回血 黑:翻面(?)', '2. 受傷判定令對方棄牌或扣血']
  },
  {
    id: 'xu_huang',
    name: '徐晃',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/徐晃.jpg',
    skills: ['1. 斷糧：殺可當兵糧寸斷使用', '2. 截輜：你的裝備不會被過河拆橋、順手牽羊及借刀殺人、轉移']
  },
  {
    id: 'cao_hong',
    name: '曹洪',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/曹洪.jpg',
    skills: ['1. 護援：當別人受到傷害時，你回血', '2. 你可以在抽牌階段前判定: 黑:和另一個人的手牌交換 紅:你的延時判定區的牌全部無效']
  },
  {
    id: 'cui_yan',
    name: '崔琰',
    faction: Faction.WEI,
    health: 3,
    imageUrl: '/images/崔琰.jpg',
    skills: ['1. 雅望：若別人出錦囊牌，抽1張牌，若以此方式抽3張牌，你可以再多抽2張，然後此技能無效直到你的回合(下次)']
  },
  {
    id: 'dian_wei',
    name: '典韋',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/典韋.jpg',
    skills: ['1. 強襲：只有殺才能對你造成傷害，別人不可再殺你', '2. 閃電、樂不思蜀、兵糧寸斷對你無效，但你不可裝防具']
  },
  {
    id: 'chen_qun',
    name: '陳群',
    faction: Faction.WEI,
    health: 3,
    imageUrl: '/images/陳群.jpg',
    skills: ['1. 定品：你可以將基本牌重鑄', '2. 每次你的回合開始前，若: 4血: 你可將所有手牌當突襲 / 3血: 你沒有距離限制 / 2血: 你像呂蒙的技能(?) / 1血: 你可將所有手牌當占卜']
  },
  {
    id: 'cao_zhang',
    name: '曹彰',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/曹彰.jpg',
    skills: ['1. 將馳：你可以在抽牌階段少抽一張牌，這一回合你可以出兩張殺而且沒距離限制']
  },
  {
    id: 'cao_chong',
    name: '曹沖',
    faction: Faction.WEI,
    health: 3,
    imageUrl: '/images/曹沖.jpg',
    skills: ['1. 稱象：當有人使用錦囊牌時，你可以把這張和他的牌將永遠交換 (可閃)，每超過1張血', '2. 仁心：全部人一回合只能使用1張錦囊']
  },
  {
    id: 'zhong_hui',
    name: '鍾會',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/鍾會.jpg',
    skills: ['1. 權計：當你受到傷害時，你可以將手牌當作「權」，每有一張「權」手牌上限+1', '2. 排險：當你有3張「權」時，你可以覺醒，回復1點體力']
  },
  {
    id: 'yang_xiu',
    name: '楊修',
    faction: Faction.WEI,
    health: 3,
    imageUrl: '/images/楊修.jpg',
    skills: ['1. 啖酪：一場遊戲中一次，你可以選擇某一回合吸收所有傷害，然後判定: 紅: 回傷害量的血 黑: 轉移所有傷害給別人']
  },
  {
    id: 'guo_jia',
    name: '郭嘉',
    faction: Faction.WEI,
    health: 3,
    imageUrl: '/images/郭嘉.jpg',
    skills: ['1. 天妒：你可以拿走所有的判定牌', '2. 遺計：當別人/自己裝備時，我抽2張牌或回1血']
  },
  {
    id: 'zhang_liao',
    name: '張遼',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/張遼.jpg',
    skills: ['1. 突襲：你把紅色牌當【兵糧寸斷】, 黑色牌當【仁王盾】', '2. 1次殺可殺全部人']
  },
  {
    id: 'cao_zhen',
    name: '曹真',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/曹真.jpg',
    skills: ['1. 司敵：一回合一次你可以阻擋一次傷害', '2. 當場上有魏勢力時，每一隻多1滴血量上限 (Max)']
  },
  {
    id: 'cao_cao',
    name: '曹操',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/曹操.jpg',
    skills: ['1. 奸雄：錦囊對你無效，使用的人扣1血 (自己不用)', '2. 你每出一張殺可判定獲得一個「奸」標記', '3. 每消耗一個「奸」標記抽1張牌']
  },
  {
    id: 'cao_pi',
    name: '曹丕',
    faction: Faction.WEI,
    health: 3,
    imageUrl: '/images/曹丕.jpg',
    skills: ['1. 放逐：你可以把1張殺當作「兵糧寸斷」使用', '2. 行殤：你不會成為黑色錦囊牌的目標', '3. 當角色死亡時，你獲得他所有牌']
  },
  {
    id: 'cao_zhi',
    name: '曹植',
    faction: Faction.WEI,
    health: 3,
    imageUrl: '/images/曹植.jpg',
    skills: ['1. 酒詩：一回合後我勝利(輪)', '2. 落英：一回合一次，全部人將牌(除)了我交換 (隨機)', '3. 桃可當五穀豐登']
  },
  {
    id: 'cao_xiu',
    name: '曹休',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/曹休.jpg',
    skills: ['1. 千駒：你距離是 4 - X (X是血量)', '2. 傾襲：當你失去最後一張手牌，你可以抽一張牌並使一名角色翻面']
  },
  {
    id: 'deng_ai',
    name: '鄧艾',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/鄧艾.jpg',
    skills: ['1. 屯田：你不會成為兵糧寸斷的對象', '2. 鑿險：當你抽到或別人使用延時性錦囊牌時，你可以抽2張牌', '3. 五穀豐登你可以拿2張牌']
  },
  {
    id: 'sima_yi',
    name: '司馬懿',
    faction: Faction.WEI,
    health: 3,
    imageUrl: '/images/司馬懿.jpg',
    skills: ['1. 反饋：當你受到傷害時，你可以抽對方一張牌', '2. 鬼才：你可以打出一張手牌代替判定牌', '3. 你的黑色手牌當閃使用']
  },
  {
    id: 'zhen_ji',
    name: '甄姬',
    faction: Faction.WEI,
    health: 3,
    imageUrl: '/images/甄姬.jpg',
    skills: ['1. 傾國：黑色手牌當閃', '2. 洛神：回合開始判定，若為黑色則獲得之並繼續判定', '3. 你的判定牌若為黑，你可以立即獲得之']
  },
  {
    id: 'xu_chu',
    name: '許褚',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/許褚.jpg',
    skills: ['1. 裸衣：摸牌階段少摸一張，殺傷害+1', '2. 你可以放棄抽牌這回合對他人的傷害 x2', '3. 殺可以當決鬥']
  },
  {
    id: 'xiahou_yuan',
    name: '夏侯淵',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/夏侯淵.jpg',
    skills: ['1. 神速：你可以跳過判定階段和摸牌階段，視為使用一張殺', '2. 殺可當閃使用', '3. 你的殺無視距離']
  },
  {
    id: 'zhang_he',
    name: '張郃',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/張郃.jpg',
    skills: ['1. 巧變：你可以跳過判定階段/抽牌階段/出牌階段來移動場上的牌', '2. 若你跳過摸牌，你可以從棄牌堆拿一張牌']
  },
  {
    id: 'xun_yu',
    name: '荀彧',
    faction: Faction.WEI,
    health: 3,
    imageUrl: '/images/荀彧.jpg',
    skills: ['1. 驅虎：拼點，贏了令對方造成傷害，輸了自己受傷', '2. 節命：當你受到傷害時，你可以令一名玩家手牌補至上限']
  },
  {
    id: 'xun_you',
    name: '荀攸',
    faction: Faction.WEI,
    health: 3,
    imageUrl: '/images/荀攸.jpg',
    skills: ['1. 奇策：你可以把所有手牌當作任意錦囊牌使用', '2. 智愚：受傷時摸牌']
  },
  {
    id: 'cao_ren',
    name: '曹仁',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/曹仁.jpg',
    skills: ['1. 據守：結束階段，摸3張牌並翻面', '2. 你的回合結束階段時，若手牌全為同色，再摸2張']
  },
  {
    id: 'man_chong',
    name: '滿寵',
    faction: Faction.WEI,
    health: 3,
    imageUrl: '/images/滿寵.jpg',
    skills: ['1. 峻刑：棄置手牌令對方棄牌或翻面', '2. 御策：當有人受到傷害，你可以棄一張牌令其回1血']
  },
  {
    id: 'cheng_yu',
    name: '程昱',
    faction: Faction.WEI,
    health: 3,
    imageUrl: '/images/程昱.jpg',
    skills: ['1. 設伏：你可以將一張手牌當作「伏兵」埋伏，抵消錦囊', '2. 賁育：受傷摸牌']
  },
  {
    id: 'cao_chun',
    name: '曹純',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/曹純.jpg',
    skills: ['1. 繕甲：摸牌階段多摸3張，然後棄置3張裝備', '2. 虎豹騎：你的殺無視距離且不能被閃避']
  },
  {
    id: 'yue_jin',
    name: '樂進',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/樂進.jpg',
    skills: ['1. 驍果：棄置一張基本牌，令對方棄置裝備或受傷', '2. 你的殺造成傷害時，摸一張牌']
  },
  {
    id: 'yu_jin',
    name: '于禁',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/于禁.jpg',
    skills: ['1. 毅重：黑色的殺對你無效', '2. 節鉞：結束階段，可令一名角色棄牌，若棄置紅色則你摸牌']
  },
  {
    id: 'pang_de',
    name: '龐德',
    faction: Faction.WEI,
    health: 4,
    imageUrl: '/images/龐德.jpg',
    skills: ['1. 猛進：你使用殺被閃避時，可以棄置對方一張牌', '2. 決死：若你沒有手牌，受到的傷害-1']
  },
  {
    id: 'cao_rui',
    name: '曹睿',
    faction: Faction.WEI,
    health: 3,
    imageUrl: '/images/曹睿.jpg',
    skills: ['1. 恢拓：受傷後可判定，紅色回血，黑色摸牌', '2. 明鑒：可以將所有手牌交給一名隊友，令其出殺次數+1']
  },
  {
    id: 'li_dian',
    name: '李典',
    faction: Faction.WEI,
    health: 3,
    imageUrl: '/images/李典.jpg',
    skills: ['1. 忘隙：每當你造成 1 點傷害，你與受傷角色各抽 1 張牌', '2. 每當你受到 1 點傷害，你與傷害來源各抽 1 張牌']
  },

  // --- 吳 (Wu) ---
  {
    id: 'lu_xun',
    name: '陸遜',
    faction: Faction.WU,
    health: 3,
    imageUrl: '/images/陸遜.jpg',
    skills: ['1. 謙遜：一張錦囊牌可當無中生有使用(一回合一次)', '2. 連營：你不會成為樂不思蜀順手牽羊的對象']
  },
  {
    id: 'yu_fan',
    name: '虞翻',
    faction: Faction.WU,
    health: 3,
    imageUrl: '/images/虞翻.jpg',
    skills: ['1. 縱玄：從你的回合開始，若輪完一輪還沒有全部人出殺的張數大於7張則全部人-2血 (可閃) (一回合一次)']
  },
  {
    id: 'zhou_tai',
    name: '周泰',
    faction: Faction.WU,
    health: 4,
    imageUrl: '/images/周泰.jpg',
    skills: ['1. 不屈：0血時判定，紅: 不死 黑: 死', '2. 奮激：投桃報李、借刀殺人(?)對你無效']
  },
  {
    id: 'zhou_fang',
    name: '周魴',
    faction: Faction.WU,
    health: 3,
    imageUrl: '/images/周魴.jpg',
    skills: ['1. 斷髮：你可以丟X張牌，使一人扣X血 (X<4) (一回合一次) (可閃)', '2. 誘導：每一次你的回合都可以將你的血量和場上血量最多的玩家交換血量 (Max=4)']
  },
  {
    id: 'wu_ban',
    name: '吳班',
    faction: Faction.WU,
    health: 4,
    imageUrl: '/images/吳班.jpg',
    skills: ['1. 戰功：你只能攻擊血量比你高的角色', '2. 如果你沒辦法攻擊任何人，你抽5張牌並翻面 (一回合一次)']
  },
  {
    id: 'zhang_hong',
    name: '張紘',
    faction: Faction.WU,
    health: 3,
    imageUrl: '/images/張紘.jpg',
    skills: ['1. 直諫：強化、弱化、突襲對你無效', '2. 全部人無法由一般抽牌方法以外來抽牌 (可閃)', '3. 當我扣血時，全部人也會扣血']
  },
  {
    id: 'sun_jian',
    name: '孫堅',
    faction: Faction.WU,
    health: 4,
    imageUrl: '/images/孫堅.jpg',
    skills: ['1. 英魂：若有人對你使用錦囊牌，你可以棄置他1張牌 (x閃電)', '2. 破虜：若有人對你使用基本牌，你可以獲得他的1張牌']
  },
  {
    id: 'sun_quan',
    name: '孫權',
    faction: Faction.WU,
    health: 4,
    imageUrl: '/images/孫權.jpg',
    skills: ['1. 制衡：你可以棄X張牌，再抽X張牌 (一回合一次)', '2. 你可以用2張殺強制敵方扣血1滴 (一回合一次)', '3. 救援：你的武將牌永遠不會翻面']
  },
  {
    id: 'ding_feng',
    name: '丁奉',
    faction: Faction.WU,
    health: 4,
    imageUrl: '/images/丁奉.jpg',
    skills: ['1. 短兵：當名玩家(不包括自己)受到傷害時，你可以抽X張牌 (X為傷害量)', '2. 奮迅：你可以棄掉你的武器、防具或坐騎，抽1張牌']
  },
  {
    id: 'zhou_yu',
    name: '周瑜',
    faction: Faction.WU,
    health: 3,
    imageUrl: '/images/周瑜.jpg',
    skills: ['1. 英姿：投桃報李你可以抽一張牌且不用幫別人回一血', '2. 反間：孤注一擲不會讓你扣血', '3. 鴻門宴不會讓你扣血']
  },
  {
    id: 'huang_gai',
    name: '黃蓋',
    faction: Faction.WU,
    health: 4,
    imageUrl: '/images/黃蓋.jpg',
    skills: ['1. 苦肉：殺可以當過河拆橋使用 (強制)', '2. 詐降：扣1血，可抽3張', '3. 若周瑜在場上，只能對他用殺']
  },
  {
    id: 'gan_ning',
    name: '甘寧',
    faction: Faction.WU,
    health: 4,
    imageUrl: '/images/甘寧.jpg',
    skills: ['1. 奇襲：一回合一次，你可以把1張基本牌當作無中生有使用', '2. 銀鈴：你可以一次有2個武器和防具']
  },
  {
    id: 'lu_meng',
    name: '呂蒙',
    faction: Faction.WU,
    health: 4,
    imageUrl: '/images/呂蒙.jpg',
    skills: ['1. 克己：你若在此回合未出殺沒就不用棄牌', '2. 當你武將牌翻面或瀕死時你判定5次，每有一張紅血其 (unclear)']
  },
  {
    id: 'taishi_ci',
    name: '太史慈',
    faction: Faction.WU,
    health: 4,
    imageUrl: '/images/太史慈.jpg',
    skills: ['1. 天義：若你抽牌階段沒抽到錦囊牌，你可以再進行一次抽牌階段', '2. 酣戰：全場裝備無效']
  },
  {
    id: 'lu_su',
    name: '魯肅',
    faction: Faction.WU,
    health: 3,
    imageUrl: '/images/魯肅.jpg',
    skills: ['1. 好施：你可以多抽2張牌，再將手牌2張交給另一名玩家', '2. 締盟：你會成為火攻的對象', '3. 全場基本牌可當錦囊牌']
  },
  {
    id: 'sun_ce',
    name: '孫策',
    faction: Faction.WU,
    health: 4,
    imageUrl: '/images/孫策.jpg',
    skills: ['1. 激昂：使用決鬥或被決鬥時摸一張牌', '2. 魂姿：覺醒技，1血時獲得英姿和英魂', '3. 制霸：拼點贏了可以拿走對方的牌']
  },
  {
    id: 'da_qiao',
    name: '大喬',
    faction: Faction.WU,
    health: 3,
    imageUrl: '/images/大喬.jpg',
    skills: ['1. 國色：方塊牌當樂不思蜀使用', '2. 流離：你成為殺的目標時，可以棄一張牌將目標轉移給攻擊範圍內的其他角色']
  },
  {
    id: 'xiao_qiao',
    name: '小喬',
    faction: Faction.WU,
    health: 3,
    imageUrl: '/images/小喬.jpg',
    skills: ['1. 天香：受傷時棄一張牌，將傷害轉移給別人，該角色摸X張牌(X=當前失血)', '2. 紅顏：你的黑桃牌視為紅桃']
  },
  {
    id: 'sun_shang_xiang',
    name: '孫尚香',
    faction: Faction.WU,
    health: 3,
    imageUrl: '/images/孫尚香.jpg',
    skills: ['1. 結姻：棄兩張手牌，令你與一名男性角色各回1血', '2. 梟姬：當你失去裝備區的牌時，摸兩張牌']
  },
  {
    id: 'zhu_ran',
    name: '朱然',
    faction: Faction.WU,
    health: 4,
    imageUrl: '/images/朱然.jpg',
    skills: ['1. 膽守：你造成傷害後，可以摸一張牌', '2. 你的結束階段，你可以棄置攻擊範圍內一名角色的一張牌']
  },
  {
    id: 'cheng_pu',
    name: '程普',
    faction: Faction.WU,
    health: 4,
    imageUrl: '/images/程普.jpg',
    skills: ['1. 癘火：你可以將普通殺當火殺使用', '2. 醇醪：瀕死時可將殺當酒使用']
  },
  {
    id: 'han_dang',
    name: '韓當',
    faction: Faction.WU,
    health: 4,
    imageUrl: '/images/韓當.jpg',
    skills: ['1. 弓騎：攻擊範圍無限', '2. 解煩：你的回合，你可以棄一張牌令一名角色回1血']
  },
  {
    id: 'xu_sheng',
    name: '徐盛',
    faction: Faction.WU,
    health: 4,
    imageUrl: '/images/徐盛.jpg',
    skills: ['1. 破軍：當你使用殺時，你可以令目標把手牌蓋起來，若傷害結算完畢，還給他', '2. 疑城：結束階段，你可以摸一張牌']
  },
  {
    id: 'ling_tong',
    name: '凌統',
    faction: Faction.WU,
    health: 4,
    imageUrl: '/images/凌統.jpg',
    skills: ['1. 旋風：當你失去裝備區的牌時，可以棄置一名角色的一張牌', '2. 勇進：你的殺不可被閃避(若裝備武器)']
  },
  {
    id: 'zhuge_jin',
    name: '諸葛瑾',
    faction: Faction.WU,
    health: 3,
    imageUrl: '/images/諸葛瑾.jpg',
    skills: ['1. 弘援：摸牌階段你可以少摸 1 張牌，然後令至多兩名其他角色各摸 1 張牌', '2. 緩釋：當有判定牌生效前，你可以打出一張牌代替之']
  },
  {
    id: 'kan_ze',
    name: '闞澤',
    faction: Faction.WU,
    health: 3,
    imageUrl: '/images/闞澤.jpg',
    skills: ['1. 下書：出牌階段開始時，你可以與一名角色交換所有手牌', '2. 寬釋：結束階段，你可以回復 1 點體力']
  },

  // --- 晉 (Jin) ---
  {
    id: 'sima_yan',
    name: '司馬炎',
    faction: Faction.JIN,
    health: 3,
    imageUrl: '/images/司馬炎.jpg',
    skills: ['1. 你可以在抽牌時抽牌組中的X張牌，選X張加入你的手牌，其他的牌: 紅: +1血 黑: +1生命上限 之後棄掉 (X=生命值 (最多8血))']
  },
  {
    id: 'yang_hu',
    name: '羊祜',
    faction: Faction.JIN,
    health: 3,
    imageUrl: '/images/羊祜.jpg',
    skills: ['1. 殺可以當拋磚引玉使用', '2. 別人不可以對你用出其不意', '3. 鐵索連環可以多抽5張牌']
  },
  {
    id: 'jia_chong',
    name: '賈充',
    faction: Faction.JIN,
    health: 3,
    imageUrl: '/images/賈充.jpg',
    skills: ['1. 稱讚：結束階段，令一名角色摸一張牌', '2. 忠節：當你受傷時，可以令傷害來源棄置一張手牌']
  },
  {
    id: 'zhang_chun_hua',
    name: '張春華',
    faction: Faction.JIN,
    health: 3,
    imageUrl: '/images/張春華.jpg',
    skills: ['1. 絕情：你造成的傷害視為體力流失 (無屬性、不觸發受傷技能)', '2. 傷逝：當你手牌數小於X時，將手牌補至X張 (X=已損失體力值)']
  },
  {
    id: 'wang_yuan_ji',
    name: '王元姬',
    faction: Faction.JIN,
    health: 3,
    imageUrl: '/images/王元姬.jpg',
    skills: ['1. 尚儉：你的手牌上限+2', '2. 謙沖：出牌階段開始時，判定：紅則獲得「謙」標記，黑則獲得「沖」標記']
  },
  {
    id: 'sima_zhao',
    name: '司馬昭',
    faction: Faction.JIN,
    health: 3,
    imageUrl: '/images/司馬昭.jpg',
    skills: ['1. 昭心：若我出殺被閃，我下一回合對別人傷害x2', '2. 當別人或你使用錦囊牌，我可判定: 黑: 抽1張牌 紅: 回血']
  },

  // --- 神 (God) ---
  {
    id: 'shen_cao_cao',
    name: '神曹操',
    faction: Faction.GOD,
    health: 3,
    imageUrl: '/images/神曹操.jpg',
    skills: ['1. 歸心：你受到1點傷害，可以獲得全場每人一張牌', '2. 飛影：距離+1']
  },
  {
    id: 'shen_lv_bu',
    name: '神呂布',
    faction: Faction.GOD,
    health: 5,
    imageUrl: '/images/神呂布.jpg',
    skills: ['1. 狂暴：遊戲開始獲得2個暴怒標記，受傷或造成傷害獲得1個', '2. 神憤：棄6個標記，全場所有人受1點傷害，棄置裝備，棄置4張手牌', '3. 無謀：使用錦囊需棄1個標記']
  },
  {
    id: 'shen_zhao_yun',
    name: '神趙雲',
    faction: Faction.GOD,
    health: 2,
    imageUrl: '/images/神趙雲.jpg',
    skills: ['1. 絕境：手牌上限+2', '2. 龍魂：可以將紅桃當桃，方塊當火殺，梅花當閃，黑桃當無懈可擊']
  },
  {
    id: 'shen_guan_yu',
    name: '神關羽',
    faction: Faction.GOD,
    health: 5,
    imageUrl: '/images/神關羽.jpg',
    skills: ['1. 武神：紅桃牌當殺使用，無距離限制', '2. 索命：你殺死角色時，該角色直接死亡不進入瀕死']
  },
  {
    id: 'shen_zhou_yu',
    name: '神周瑜',
    faction: Faction.GOD,
    health: 4,
    imageUrl: '/images/神周瑜.jpg',
    skills: ['1. 琴音：棄牌階段棄置兩張牌，令全場回1血或扣1血', '2. 業炎：限定技，可對一至三名角色造成共計3點火焰傷害']
  },
  {
    id: 'shen_zhuge_liang',
    name: '神諸葛亮',
    faction: Faction.GOD,
    health: 3,
    imageUrl: '/images/神諸葛亮.jpg',
    skills: ['1. 七星：遊戲開始時將7張牌移出遊戲作為星，摸牌階段可用手牌交換', '2. 狂風：消耗1星，令傷害+1', '3. 大霧：消耗X星，令X名角色本回合免疫非雷電傷害']
  },
  {
    id: 'shen_sima_yi',
    name: '神司馬懿',
    faction: Faction.GOD,
    health: 4,
    imageUrl: '/images/神司馬懿.jpg',
    skills: ['1. 忍戒：受傷或棄牌獲得「忍」標記', '2. 連破：若你殺死角色，可進行額外回合', '3. 極略：消耗「忍」標記發動鬼才、放逐、完殺等技能']
  },
  {
    id: 'shen_liu_bei',
    name: '神劉備',
    faction: Faction.GOD,
    health: 6,
    imageUrl: '/images/神劉備.jpg',
    skills: ['1. 龍怒：轉換技，陽：殺不計次數且火屬性；陰：雷殺且回血', '2. 結營：將所有角色橫置']
  }
];

export const RULES_TEXT: RuleSection[] = [
  {
    title: '基本規則',
    content: [
      '每回合分：判定階段 -> 抽牌階段 -> 出牌階段 -> 棄牌階段 -> 結束階段。',
      '抽牌階段：從牌堆抽 2 張牌。',
      '棄牌階段：手牌數需等於當前體力值，多餘的需棄置。',
      '瀕死狀態：體力降至 0 或以下時，需使用【桃】或【酒】自救，或由他人使用【桃】救起。若無人救援則死亡。'
    ]
  },
  {
    title: '自定義規則',
    content: [
      '所有技能優先級高於基本規則。',
      '若卡牌描述與技能衝突，以技能為準。',
      '部分武將擁有「翻面」機制，翻面者跳過下一回合的抽牌與出牌階段，然後翻回正面。',
      '擴充錦囊牌（如：投桃報李、鴻門宴）的具體效果請玩家自行約定，或參考主流擴充包規則。'
    ]
  }
];
