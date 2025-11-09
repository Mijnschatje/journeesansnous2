// assets/js/translations.js
// Toutes les traductions centralisées ici.
// Forme attendue : { code: { label, rtl (bool), audio (url|""), content (HTML) } }

console.log("[i18n] translations.js chargé");

window.translations = {
  fr: {
    label: "Français",
    rtl: false,
    audio: "assets/audio/audio-francais.mp3",
    content: `
      <div class="intro">
        <p><strong>« La Journée Sans Nous : si on s'arrête, tout s'arrête »</strong>, est organisée à l'occasion de la <strong>Journée internationale des migrant·e·s, le 18 décembre 2025</strong>.</p>
        <p>Cette journée d'action, initiée par les <strong>collectifs de personnes sans papiers et immigrées</strong>, appelle à une <strong>grève solidaire et politique</strong> contre le <strong>racisme d'État</strong>, la précarisation, et le recul des droits des personnes migrantes en France.</p>
        <p>Nous pensons que <strong>cette lutte nous concerne toutes et tous</strong>, car les lois racistes et les politiques d'exclusion pavent la voie au fascisme et fragilisent les droits de chacun·e.</p>
        <p>Des collectifs, syndicats, associations et mouvements sociaux se mobilisent dans toute la France pour construire ensemble cette journée historique.</p>
      </div>

      <p><strong>Voici le texte de notre appel :</strong></p>

      <p>« Ce pays ne marche pas sans immigré·e·s. Il n'existe pas sans l'immigration et en bénéficie à tous points de vue.</p>
      <p>Ce n'est pas l'immigration qui le détruit, ce sont les politiques menées, le racisme et l'injustice.</p>
      <p>Le 18 décembre, à l'occasion de la Journée internationale des migrant·e·s, nous appelons à en faire la démonstration.</p>
      <p>Nous appelons à organiser, dans tous nos quartiers, nos lieux de travail, « une journée sans nous : si on s'arrête, tout s'arrête ! ».</p>
      <p>Avec ou sans papiers, immigré·e·s, enfants d'immigré·e·s, de 1ère, 2ème, 3ème génération, cousin·e·s, voisin·e·s, collègues, bloqueur·se·s du 10 septembre, manifestant·e·s et grévistes du 18 septembre, nous n'irons pas à l'école, au travail, dans les commerces. Nous manifesterons ensemble dans toutes les villes du pays :</p>

      <ul>
        <li><strong>Pour l'abrogation immédiate</strong> de la loi Darmanin et des circulaires Retailleau</li>
        <li><strong>Pour l'égalité des droits</strong> de toutes et tous, à l'école, au logement, à la santé, à la culture, au travail.</li>
        <li><strong>Pour la régularisation</strong> des sans-papiers</li>
        <li><strong>Pour la fermeture</strong> des centres de rétention administrative (CRA)</li>
        <li><strong>Pour la justice sociale et la solidarité</strong>, contre le racisme et le fascisme</li>
      </ul>

      <p>Si tu le souhaites, tu peux nous rejoindre. Tu peux cliquer sur le lien en dessous et remplir le formulaire, nous t'enverrons le programme.</p>
    `
  },

  en: {
    label: "English",
    rtl: false,
    audio: "assets/audio/audio-english.mp3",
    content: `
      <div class="intro">
        <p><strong>"A Day Without Us: If We Stop, Everything Stops"</strong> is organised to mark <strong>International Migrants Day on 18 December 2025.</strong></p>
        <p>This day of action, initiated by <strong>collectives of undocumented migrants and immigrants</strong>, calls for a <strong>political solidarity strike</strong> against <strong>state racism</strong>, precarity, and the erosion of migrants' rights in France.</p>
        <p>We believe that <strong>this struggle concerns all of us</strong>, because racist laws and exclusionary policies pave the way for fascism and undermine everyone's rights.</p>
        <p>Collectives, trade unions, associations, cultural spaces, and social movements are mobilising across France to build this historic day together.</p>
      </div>

      <p><strong>Here is our call to action:</strong></p>

      <p>"This country cannot function without immigrants. It cannot exist without immigration and benefits from it in every way.</p>
      <p>It is not immigration that is destroying this country; it is the policies being implemented, racism and injustice.</p>
      <p>On 18 December, International Migrants Day, we call on everyone to protest.</p>
      <p>We call on everyone to organise, in all our neighbourhoods and workplaces, "A Day Without Us: if we stop, everything stops!".</p>
      <p>Documented or undocumented, immigrants, children of immigrants, first-, second- and third-generation, cousins, neighbours, colleagues, those involved in the Block Everything movement on 10 September, demonstrators and strikers from 18 September — we will not go to school, to work or to the shops. We will demonstrate together in every city across the country:</p>

      <ul>
        <li><strong>For the immediate repeal</strong> of the Darmanin law and the Retailleau memorandum</li>
        <li><strong>For equal rights for all</strong> in education, housing, healthcare, culture and employment</li>
        <li><strong>For the processing</strong> of undocumented migrants</li>
        <li><strong>For the closure</strong> of administrative detention centres (CRA)</li>
        <li><strong>For social justice and solidarity</strong>, against racism and fascism</li>
      </ul>

      <p>If you would like to join us, click the link below and fill in the form; we will send you the programme.</p>
    `
  },

  ar: {
    label: "🌍 العربية",
    rtl: true,
    audio: "assets/audio/audio-arabeclassique.mp3",
    content: `
      <div class="intro" dir="rtl">
        <p><strong>"يوم بدوننا: إذا توقّفنا يتوقّف كلّ شيء!"</strong></p>
        <p>نداءٌ بمناسبة <strong>اليوم الدولي للمهاجرين، 18 ديسمبر/كانون الأول 2025</strong>.</p>
        <p>هذا اليوم الاحتجاجي مبادرة من <strong>Collectifs المهاجرين/ات ومن لا يملكون/يملكن أوراقًا</strong> ويدعو إلى <strong>إضراب تضامني وسياسي</strong> ضد <strong>العنصرية المؤسسية</strong>، والتهميش، وتراجع الحقوق في فرنسا.</p>
        <p>ونعتقد أن <strong>هذه المعركة تهمّنا جميعًا</strong>، لأن القوانين العنصرية والسياسات الإقصائية تُمَهِّد للفاشية وتُضعِف حقوق الجميع.</p>
        <p>تتحرك جماعات ونقابات وجمعيات وحركات اجتماعية في أنحاء فرنسا لبناء هذا اليوم التاريخي معًا.</p>
      </div>

      <p><strong>نص النداء:</strong></p>

      <p>هذا البلد لا يسير من دون المهاجرين، وهو قائم بفضل الهجرة ويستفيد منها في كلّ المجالات.</p>
      <p>الذي يدمّره ليس الهجرة بل السياسات المتَّبعة والعنصرية والظلم.</p>
      <p>في 18 ديسمبر، بمناسبة اليوم الدولي للمهاجرين، ندعو إلى إثبات ذلك.</p>
      <p>فلننظّم في أحيائنا وأماكن عملنا «يومًا بدوننا: إذا توقّفنا يتوقّف كلّ شيء».</p>
      <p>سواء بأوراق أم بدونها — مهاجرون/مهاجرات، أبناء/بنات مهاجرين من الجيل الأوّل والثاني والثالث، الأقارب والجيران والزملاء… لن نذهب إلى المدرسة أو إلى العمل أو التسوّق. سنسير معًا في كلّ مدن البلاد من أجل:</p>

      <ul>
        <li><strong>الإلغاء الفوري</strong> لقانون دارمانان ومذكّرات ريتايو</li>
        <li><strong>المساواة في الحقوق</strong> للجميع في التعليم والسكن والصحة والثقافة والعمل</li>
        <li><strong>تسوية أوضاع</strong> مَن لا يملكون أوراقًا</li>
        <li><strong>إغلاق</strong> مراكز الاحتجاز الإداري (CRA)</li>
        <li><strong>العدالة الاجتماعية والتضامن</strong> ضدّ العنصرية والفاشية</li>
      </ul>

      <p>إذا رغبت في الانضمام إلينا، انقر الرابط أدناه واملأ الاستمارة، وسنرسل إليك البرنامج.</p>
    `
  },

  // Wolof
  wo: {
    label: "🇸🇳 Wolof",
    rtl: false,
    audio: "",
    content: `
      <div class="intro">
        <p><strong>"Béss bu ñu amul nun: bu ñu taxaw, lépp dina taxaw!"</strong></p>
        <p>Ndaje bii di <strong>Bésu Àdduna bu Immigree yi, 18 Disàmbar 2025</strong>.</p>
        <p>Da fañu woo <strong>ñeeñu Immigree ak ñeeñu amul papie</strong> ngir <strong>gàddaay bu politig ak bu njàmm</strong> ci <strong>njàkk sañ-sañ</strong> ak fippu ci sañ-sañu Immigree ci Farans.</p>
        <p>Nun gëm nañu ne <strong>liggéeyu njàmm bii mooy sunu liggéey bépp</strong>, ndaxte laawol yu xees ak siyasaaji yu tuuma dañuy wàcce jàmmu ñépp.</p>
        <p>Jokkondiraaɓe, sindika, asosyasyon ak mboolo yi ñu ngi mobilize ci bépp réew ngir defar béss bii.</p>
      </div>

      <p><strong>Lii mooy sunu ndigël:</strong></p>

      <p>"Réew bii du dox bu amul Immigree. Du Immigree yi ñu taxaw a bañ réew mi, waaye <strong>laawol ak njàkk sañ-sañ</strong> lañu tax.</p>
      <p>Ci 18 Disàmbar, Bésu Àdduna bu Immigree yi, ñu woowoo ñépp ngir taxaw.</p>
      <p>Nu ngi woowoo ñépp ci sunu gox ak sunu liggéey: "<strong>Béss bu ñu amul nun: bu ñu taxaw, lépp dina taxaw!</strong>"</p>
      <p>Ñeeñu am papie ak ñeeñu amul — Immigree, doom-immigree, mbokk, wa kër, wa gox, wa liggéey, ñépp — duñu dem jàng, liggéey, marse. Ñu bokk lépp ci jàmm ngir:</p>

      <ul>
        <li><strong>Ngir simmali léegi</strong> laawol Darmanin ak tektal Retailleau</li>
        <li><strong>Ngir sañ-sañu ñépp</strong> — ci njàng, kër, njàmm, aada ak liggéey</li>
        <li><strong>Ngir yore sañ-sañ</strong> ngir ñeeñu amul papie</li>
        <li><strong>Ngir tëj</strong> kërug jey gi (CRA)</li>
        <li><strong>Ngir jàmm ak mbooloom nit</strong>, ñu fippu ci arafat ak gàddaay</li>
      </ul>

      <p>Soo bëggee bokk, nga fal foom bi te nuy la yónnee porogaraam bi.</p>
    `
  },

  // Fulfulde / Pulaar
  ff: {
    label: "🇸🇳🇲🇱🇬🇳 Fulfulde / Pulaar",
    rtl: false,
    audio: "",
    content: `
      <div class="intro">
        <p><strong>"Ñalnde waɗi amen: so min waɗi, kala waɗi!"</strong></p>
        <p>Ko ñalnde ndee woni <strong>Ñalnde Aduna ju Immigireeɓe, 18 Diisembar 2025</strong>.</p>
        <p>Ko jokkondiraaɓe e <strong>immigireeɓe e waɗɓe alaa papiiri</strong> ɗe njiɗi <strong>golle njokkondiral e siyasa</strong> ngam jaɓɓaade <strong>lenyol</strong> e ɓeydoo hakkunde immigireeɓe e Farayse.</p>
        <p>Minen njogii ɗum ko <strong>golle ndee ina naamnooɓe amen fow</strong>, sabu laawol goonga e siyasaaji tiiɗnde ina ŋakkisa hakkeeji.</p>
      </div>

      <p><strong>Ɗum ɗoo ko ɗuum ndiyam amen:</strong></p>

      <p>Leñol waawaa yaha tawa alaa immigireeɓe; <strong>politiikuuji, lenyol e caɗeele</strong> ko ɓeɗi.</p>
      <p>Hade 18 Diisembar, ko ñalnde aduna ju immigireeɓe; min ngi ɗoŋga ɗe fow.</p>
      <p>Min ngiɗi e galleeji e golleji: "<strong>Ñalnde waɗi amen: so min waɗi, kala waɗi!</strong>"</p>

      <ul>
        <li><strong>Ngam momtude ɗoo</strong> laawol Darmanin e surkular Retailleau</li>
        <li><strong>Ngam hakkunde fow</strong> — e njangol, leydi, ñaamande, kala e golle</li>
        <li><strong>Ngam heftinde daraja</strong> waɗɓe alaa papiiri</li>
        <li><strong>Ngam uddugol</strong> gallee jeygol (CRA)</li>
        <li><strong>Ngam peesaare e mbooɗum</strong>, ɗooɗnde lenyol e fashisimu</li>
      </ul>

      <p>So aɗa yiɗi e amen, naatnu link ngal tee hullito formu ngal; min njoɓi-ma porogaraam ngal.</p>
    `
  },

  // Serer
  serere: {
    label: "🇸🇳 Serer / Seereer",
    rtl: false,
    audio: "",
    content: `
      <div class="intro">
      <p>“Ngéén jaamu ji ñu amul : bu ñu jooy, lépp dina jooy !”</p>
      <p>Ngéén jaamu ji ñu amul dafay am ci 18 décembre 2025, ngir ngéén aduna bu ñuul yi (Journée internationale des migrant·e·s).</p>
      <p>Ngéén jaamu ji ñu amul dafay tànn mbir mu jëmm ak politig, ngir jooy ci doole ju xees, jafe-jafe ak mbugal ci njàng, nguur ak dund ci Farãs.</p>
      <p>Ñu ngi faale ne : lii mooy sunu mbir bopp, ndax mboolem njiitu nguur ak politig yu xees dañuy def lu yàq sañ-sañu ñuul yi ak sañ-sañu askan wi yépp.</p>
      <p>Ngir ndimbal ak jàmm, ñu bari lañu ngi bëgg jëfandikoo bés bi ngir def ko bés bu mag bu jàmm ak doole.</p>
    </div>

    <p>Sunuy wax :</p>

    <p>Réew mii du dox ndax ñuul yi.</p>
    <p>Du am itam so du jël sa doole ci ñoom.</p>
    <p>Du ñuul yi ñuy dagg réew mii, waaye politig ak jafe-jafe lañu tax.</p>
    <p>Ci 18 décembre, bésu aduna bu ñuul yi, danu naan :</p>
    <p>“Ngéén jaamu ji ñu amul : bu ñu jooy, lépp dina jooy !”</p>

    <p>Ñu am ak ñu amul ndombo, ñuul yi, doom yu ñuul yi, ñaari taali, ñetteel, aji-jàngkat, aji-liggéey, aji-sell — danu dëpp liggéey, jàng, jaay, ngir génn ci yoon bi ak sunu bopp.</p>

    <p>Danu tàbbi :</p>
    <ul>
      <li>Ñu dindi loi Darmanin ak Retailleau</li>
      <li>Ñu jàppale ndimbal ak doole bu mel ne sunu ñépp, ci jàng, kër, dund, jàmm, ak liggéey</li>
      <li>Ñu def sañ-sañ bu dëgg ngir ñu amul ndombo yi</li>
      <li>Ñu tëj kajoori nguur gi (CRA)</li>
      <li>Ñu jëf ngir jàmm, doole ak sago askan wi, ak fattu ci xees ak fascisme</li>
    </ul>

    <p>So bëgg nga bokk, duggal sa tur ci lëkkalekaay bi, nga fattaliku formileer bi, nun di la yóbbu program bi.</p>
  `
  },

  // Diola / Joola Fogny
  "diola-joola-fogny": {
    label: "🇸🇳 Diola / Joola Fogny",
    rtl: false,
    audio: "",
    content: `
      <div class="intro">
      <p>“Abaŋ aneŋ ñi : kaŋ ankaŋ, baŋ ankaŋ !”</p>
      <p>Abaŋ aneŋ ñi aŋul beŋ 18 décembre 2025, eneŋ Abaŋ a dunia e baŋu-mbaŋ (Journée internationale des migrant·e·s).</p>
      <p>Abaŋ aneŋ ñi, eŋu di afañ e kanyin baŋu, afañ e politiki, ngir baŋu kufu, kanyin, ak kasum e saŋa yi.</p>
      <p>Eŋu fiŋ eneŋ : baŋu yaŋ eneŋ ñi, baŋu yaŋ eneŋ ñi bubaŋ !</p>
      <p>Abaŋ aneŋ ñi eŋu di afañ ngir kaw e joola yi, ak ñi bubaŋ beŋ Francia, ngir eŋu kuñul, kaŋ ankaŋ ak bubaŋ.</p>
      <p>Ñi eŋu buñu, ak sindika, ak kuñul yi beŋ Francia, eŋu baŋu ngir di akeneŋ e abaŋ aneŋ ñi bu mag.</p></div>
      <p>Ankaŋ aŋu :</p> 
      <p>Baŋu kasum beŋu ñi bubaŋ yi.</p>
      <p>Kasum aŋul beŋ ñi bubaŋ, eŋu ñi bubaŋ aŋu naŋu kasum.</p>
      <p>Ñi bubaŋ aŋul beŋ baŋu kufu kasum, baŋu kufu ñi aŋu ñi bubaŋ, ak politiki yi.</p>
      <p>Beŋ 18 décembre, abaŋ a dunia e baŋu-mbaŋ, eŋu baŋu :</p>
      <p>“Abaŋ aneŋ ñi : kaŋ ankaŋ, baŋ ankaŋ !”</p>
   

    <p>Ñi bubaŋ ak ñi amul karatasi, ñi bubaŋ yi, ñi baŋu-mbaŋ yi, ñi taali yi, ñi akaneŋ ak ñi liggey — eŋu kaŋ ankaŋ e baŋu sukul, e liggey, e kasum, eŋu baŋu baŋu-mbaŋ.</p>

    <p>Eŋu baŋu :</p>

    <ul>
      <li>Kaŋu loi Darmanin ak Retailleau</li>
      <li>Kaŋu hakë beŋ ñi bubaŋ ñi ñi yépp, e sukul, e kasum, e jam, e kultura, e liggey</li>
      <li>Kaŋu hakë ñi amul karatasi yi</li>
      <li>Kaŋu tey jofe yi (CRA)</li>
      <li>Kaŋu hakë jam, baŋu beŋ ñi bubaŋ, eŋu kuñul, ak kasum e xees ak fascisme</li>
    </ul>

    <p>So aŋul beŋ naŋu, kaŋ link baŋ beŋ, fut formileer, eŋu baŋu ñi jool program bi.</p>
  `
  },

  // Soninké
  snk: {
    label: "🇲🇱🇲🇷 Soninké",
    rtl: false,
    audio: "",
    content: `
    <div class="intro">
      <p>“Janna ka n’a te an ma : n’an ta, le bɛ ta !”</p>
      <p>Janna n’a be ta 18 décembre 2025, ka taa Duniya ka janna ta iɲaŋu (Journée internationale des migrant·e·s).</p>
      <p>Janna n’a n’a be naamu ka toɔma ani politiki ka naamu, ka fɔ dankunyaa ani laahuraa, ka ɗa a jaŋɛ ka faaŋe ani a naamuya e Faransi.</p>
      <p>An be fɔ : n’a la be an bɛɛ ka taa, an n’a be naamu ka taa.</p>
      <p>Laha n’a be taa n’a jaamu ta iɲaŋu la, ndax a ye ngoro ani laahuraa n’a bɛ ka da faaŋe ka laahuraa.</p>
      <p>Tilenmu, sindika ani jamu be Faransi la, n’a be n’aamu ka janna n’a ta ka naamu.</p>    </div>

      <p>An naamu :</p>

      <p>Duniya la mɛn tɛ taa bila iɲaŋu.</p>
      <p>A tɛ be taa bila an naamuya la, ani an bɛɛ be faaŋe a la.</p>
      <p>A tɛ iɲaŋu be naamu duniya la, waaye politiki ani laahuraa n’a be faaŋe.</p>

      <p>18 décembre, duniya ka janna ta iɲaŋu la, an be fɔ :</p>

      <p>“Janna ka n’a te an ma : n’an ta, le bɛ ta !”</p>

    <p>Iɲaŋu ani n’a be makaratasi, n’a be iɲaŋu la, iɲaŋu denmɛ ta 1er, 2ème ani 3ème kelen, jamu, sɛnɛkɛ, mɔgɔw ani jamanaw — an be ta baara, sukuru ani suguba, ka taa sɛbɛɛnɛ.</p>

    <p>An be naamu :</p>

    <ul>
      <li>Ka Darmanin ani Retailleau ka sɛbɛ</li>
      <li>Ka hakɛ la be bɛɛ la : sukuru, so, hɛrɛ, kulturu ani baara</li>
      <li>Ka iɲaŋu min tɛ makaratasi ka faaŋe</li>
      <li>Ka CRA ka sɛbɛ (ka taa dɔnna min naamu)</li>
      <li>Ka hakɛ ani laahuraa, ka taa jamu ani laahuraa, ka faaŋe xees ani fascismu.</li>
    </ul>

    <p>N’a i be se be taa an na, duguma linku la, furu formilɛɛri la, an be i na programu la.</p>
  `
      },
  bm: {
  label: "🇲🇱 Bambara / Bamanankan",
  rtl: false,
  audio: "",
  content: `
    <div class="intro">
      <p>“Don o be an ye : ni an taara, fɛ ka taa !”</p>
      <p>Don o be yɛrɛma 18 décembre 2025, ka taa Duniya don kan ka yɛrɛma (Journée internationale des migrant·e·s).</p>
      <p>Don o ye bɛɛ sininɛ fɔlɔw ka daminɛ ni i ni kɛla bɛɛ ka tɔrɔ, fɔ ka b’a fɛ b’a dɔ kunu ye, ka b’a bɔ nyɛman na, ni ka sigida yɛrɛma ka fɛɛrɛya Faransi la.</p>
      <p>An b’a fɔ bɛɛ : don o ye an don, an b’a fɔ bɛɛ la !</p>
      <p>Ni a ye so, politike ni faamuya kɛ b’a la fɔ ka jigin fɔ n’u bɛɛ, a bɛ sɔrɔ la ka bɔ n’i hakɛ ni kɛlɛya la.</p>
      <p>Sindika, jamuw ni fɛɛnɛ kɛla bɛɛ be b’a yɛrɛma Faransi la, bɛɛ be b’a fɛ ka kɛ don o ka yɛrɛma, don ba kɛrɛkɛrɛ.</p>
    </div>

    <p>An fɔlɔya :</p>

    <p>Dɔw ye tɛ se ka sɔrɔ bila yɛrɛma.</p>
    <p>A tɛ be taa bila i ni yɛrɛma la, a be nɔgɔya ni fɛɛrɛ sɔrɔ b’a la.</p>
    <p>A tɛ yɛrɛma ye b’a bɔ nyɛman na, waaye politike ni hakɛya min b’a kɛ.</p>
    <p>Ka 18 décembre, ka don kan ka yɛrɛma la, an b’a fɔ :</p>
    <p>“Don o be an ye : ni an taara, fɛ ka taa !”</p>
    <p>Yɛrɛma ni yɛrɛma min tɛ makaratasi, denw min bɛɛ ye yɛrɛma denw, taali fɔlɔ, taali fila, taali saba, jamu, fɛɛnɛ, baara kɛla ni sɛbɛnniw — an b’a taara baara la, sɛbɛnni la, sugu la, ka taa sigida la kɛrɛkɛrɛ.</p>
    <p>An b’a fɔ :</p>

    <ul>
      <li>Ka bo loi Darmanin ni Retailleau</li>
      <li>Ka yɛrɛ hakɛ bɛɛ la : sɛbɛnni, so, dɔgɔkun, kulture ni baara</li>
      <li>Ka yɛrɛma min tɛ makaratasi ka sɛbɛya</li>
      <li>Ka da tɔɔrɔso (CRA)</li>
      <li>Ka kɛ hakɛ ni kɛlɛya, ni jamu ni fɔlɔya fɔ ka fɛɛrɛya ni fashisimu ta.</li>
    </ul>

    <p>Ni i b’a fɛ ka b’a yɛrɛma an na, ka sɛbɛn linku min bɛ kɔfɛ, ka sɛbɛn formilɛri, an bɛ i na programu la.</p>
  `
},
ln: {
  label: "🇨🇬🇨🇩 Lingála",
  rtl: false,
 audio: "",
 content: `
    <div class="intro">
      <p>“Mokolo ya biso te : soki biso to tiká mosala, nyonso e tiká !”</p>
      <p>Mokolo oyo ekozala 18 décembre 2025, mpo na mokolo ya bato ya mboka mosusu (Journée internationale des migrant·e·s).</p>
      <p>Mokolo oyo esalami mpo na kosɛnga boyokani mpe greve ya politiki, mpo na kobunda na boyibi ya makoki, na mobulu ya etat, mpe na ndenge oyo bato ya mboka mosusu bazali kobebisama na France.</p>
      <p>Biso nyonso toyebi ete likambo oyo ezali mpo na biso nyonso, pamba te mobulu mpe mobeko ya kopengola bato ebotaka bokasi ya bato nyonso mpe ebotaka nzela ya fascisme.</p>
      <p>Bato ya misala, syndicá, lisanga, mpe bato ya culture bazali kotala ndenge ya kosala elongo mokolo oyo ya monene.</p>
    </div>
    <p>Maloba na biso :</p>
    <p>Mboka oyo ekoki te kozala soki bato ya mboka mosusu te.</p>
    <p>Ezali bango nde bakotisi bomoi, mayele mpe makasi na mboka.</p>
    <p>Ezali te bango bazali kobebisa mboka, kasi ezalaki politiki mabe, mobulu mpe bosembo te.</p>
    <p>Na mokolo ya 18 décembre, na mokolo ya bato ya mboka mosusu, biso tolingi kolakisa boye :</p>
    <p>“Mokolo ya biso te : soki biso to tiká mosala, nyonso e tiká !”</p>
    <p>Bato nyonso — ba oyo bazali na papye to te, bana ya bato ya mboka mosusu, mibali, basi, ba oyo bazali na mibu ebele o mboka, bayekoli, basali — tokotika kelasi, mosala, mpe zando, mpo tokende kolakisa esika nyonso.</p>

    <p>Tosɛngi :</p>

    <ul>
      <li>Kolongola mobeko Darmanin mpe ba circulaire ya Retailleau</li>
      <li>Kopesa bato nyonso makoki moko : na kelasi, ndako, nzoto malamu, culture mpe mosala</li>
      <li>Kopesa bapapié na bato oyo bazali na yango te</li>
      <li>Koboma ba centre ya kokanga bato (CRA)</li>
      <li>Kosala mpo na bosembo, boyokani, mpe kobunda na mobulu mpe fascisme.</li>
    </ul>

    <p>Soki olingi kozala elongo na biso, finá link oyo awa, kotá formilɛr, mpe tokotindela yo program ya mokolo yango.</p>
  `
    },
"ar-dz": {
  label: "🇩🇿 العربية (الجزائري)",
  rtl: true,
 audio: "",
  content: `
    <div class="intro">
      <p>النهار بلاّ بينا: كي نحبسو، كلش يحبس !</p>

      <p>هاد النهار تَتْنَظَّم بمناسبة اليوم الدولي للمهاجرين، نهار 18 ديسمبر 2025.</p>

      <p>هاد الحركة، لي بدّاوها جمعيات الناس بلاّ وراق وناس مهاجرين، هي إضراب تضامني وسياسي ضدّ العنصرية تاع الدولة، والتهميش، وضياع الحقوق تاع الناس المهاجرين في فرنسا.</p>

      <p>رانا نؤمنو بلي هاد النضال يهمّنا كامل، خاطش القوانين العنصرية والسياسات تاع الإقصاء يفتحو الطريق للفاشية ويضربو حقوق الجميع.</p>

      <p>بزاف دي كولكتيف، نقابات، جمعيات، وحركات اجتماعية راهي تتنظم فـ كامل لفرنسا باش تبني معانا هاد النهار التاريخي.</p>
    </div>

    <p>نداءنا:</p>

    <p>هاد البلاد ما تخدمش بلاّ المهاجرين.</p>
    <p>هي ما كانتش رايحة توجد بلاّهم، وراهي تستافد منهم فـ كل حاجة.</p>
    <p>ماشي الهجرة لي تدمر البلاد، بل السياسات، والعنصرية، والحقرة.</p>

    <p>في 18 ديسمبر، بمناسبة اليوم الدولي للمهاجرين، نْعِيطو باش نورّيو هاد الحقيقة:</p>

    <p>« النهار بلاّ بينا: كي نحبسو، كلش يحبس ! »</p>

    <p>بلاّ وراق ولا بوراق، مهاجرين ولا ولاد مهاجرين، من الجيل الأول، الثاني، الثالث، جيران، صحاب، زملاء، عمال وطلبة، كامل رايحين نحبسو القراية، الخدمة، والتجارة، و نخرجو نْمانيفيستو كامل فـ الشوارع:</p>

    <ul>
      <li>باش نطالبو بإلغاء قانون دارمانين والدوريات تاع ريتايو</li>
      <li>باش نطالبو بالمساواة فـ الحقوق: فـ القراية، السكن، الصحة، الثقافة، والخدمة</li>
      <li>باش نطالبو بتسوية وضعية الناس بلاّ وراق</li>
      <li>باش نسكرو مراكز الحبس الإداري (CRA)</li>
      <li>باش نوقفو مع العدالة الاجتماعية والتضامن، ضدّ العنصرية والفاشية</li>
    </ul>

    <p>إلا حبيت تلتحق بينا، كاين الرابط لتحت، عمّر الفورم وراح يوصلك البرنامج</p>
  `
  },
  "ar-ma": {
  label: "🇲🇦العربية (الدارجة المغربية)",
  rtl: true,
  audio: "",
  content: `
    <div class="intro">
      <p>يوقف !</p>

      <p>هاد النهار كيتنظّم بمناسبة اليوم العالمي ديال المهاجرين، 18 دجنبر 2025.</p>
      <p>هاد الحركة اللي بدّاوها المهاجرين والناس اللي ما عندهمش أوراق، كتدعي إلى إضراب تضامني وسياسي ضدّ العنصرية ديال الدولة، والتهميش، وضيّاع الحقوق ديال المهاجرين ففرنسا.</p>
      <p>حيت كنآمنو بلي هاد النضال كيعني الجميع، حيت القوانين العنصرية والسياسات ديال الإقصاء كتحلّ الطريق للفاشية وكتضرب الحقوق ديال الناس كاملين.</p>
      <p>بزاف ديال التنسيقيات، النقابات، الجمعيات، والحركات الاجتماعية كيتنظّمو فكل بلاصة ففرنسا باش يبنيو معانا هاد النهار التاريخي.</p>
    </div>

    <p>النداء ديالنا:</p>
    <p>هاد البلاد ما كتخدمش بلا المهاجرين.</p>
    <p>ما تقدرش تكون بلاهم، وكتستافد منهم فكل حاجة.</p>
    <p>اللي كيدمّر البلاد ماشي الهجرة، ولكن السياسات، والعنصرية، والحقرة.</p>
    <p>فـ 18 دجنبر، بمناسبة اليوم العالمي ديال المهاجرين، كندعيو باش نبيّنو هاد الحقيقة:</p>
    <p>« نهار بلا بينا: إلى حبّسنا، كلشي يوقف ! »</p>
    <p>ناس عندهم أوراق ولا ما عندهمش، مهاجرين، ولاد المهاجرين، من الجيل الأول ولا الثاني ولا الثالث، الجيران، الحباب، الزملاء، العمال والطلبة — غادي نحْبسو القراية، الخدمة، التجارة، وغادي نخرجو نْتظاهرو جميع فالشوارع:</p>

    <ul>
      <li>باش نطالبو بإلغاء قانون دارمانان والدوريات ديال ريتايو</li>
      <li>باش نطالبو بالمساواة فـ الحقوق: فـ التعليم، السكن، الصحة، الثقافة، والخدمة</li>
      <li>باش نطالبو بتسوية وضعية الناس اللي ما عندهمش أوراق</li>
      <li>باش نسدو مراكز الاحتجاز الإداري (CRA)</li>
      <li>باش نوقفو مع العدالة الاجتماعية والتضامن، وضدّ العنصرية والفاشية</li>
    </ul>

    <p>إيلا بغيتي تشارك معانا، كاين الرابط لتحت، عمّر الفورميلير وغادي نوصلوك بالبرنامج</p>
  `
},
  
"ar-tn": {
  label: "🇹🇳 العربية (التونسية)",
  rtl: true,
  audio: "",
  content: `
    <div class="intro">
      <p>يوقف !</p>
      <p>النهار هذا يتنظّم بمناسبة اليوم العالمي للمهاجرين، 18 ديسمبر 2025.</p>
      <p>الحركة هذي، اللي بدّاوها المهاجرين والناس اللي ما عندهمش أوراق، تدعي لـ إضراب تضامني وسياسي ضدّ العنصرية متاع الدولة، والتهميش، وضياع الحقوق متاع المهاجرين في فرنسا.</p>
      <p>إحنا نآمنو اللي المعركة هذي تخصّنا الكلّ، خاطر القوانين العنصرية والسياسات متاع الإقصاء يفتحوا الباب للفاشية ويضعّفوا الحقوق متاع الناس الكلّ.</p>
      <p>برشة تنسيقيات، نقابات، جمعيات، وحركات اجتماعية قاعدين يتنظّموا في فرنسا الكلّ باش يبنيو مع بعضهم النهار التاريخي هذا.</p>
      <p>النداء متاعنا :</p>
      <p>البلاد هذي ما تمشيش بلا المهاجرين.</p>
      <p>ما تنجمش تعيش بلاهم، وهي تستافد منهم في كلّ حاجة.</p>
      <p>اللي يخرّب البلاد ما هوش الهجرة، أما السياسات، والعنصرية، والحقرة.</p>
      <p>في 18 ديسمبر، بمناسبة اليوم العالمي للمهاجرين، ندعيو باش نبيّنو الحقيقة هذي:</p>
      <p>« نهار بلا بينا: كان نحبسو، كل شي يوقف ! »</p>
    </div>

    <p>ناس عندهم أوراق ولا ما عندهمش، مهاجرين، أولاد المهاجرين، من الجيل الأول ولا الثاني ولا الثالث، جيران، صحاب، زملاء، عمّال وطُلّاب — الكلّ باش نحبسو القراية، الخدمة، والتجارة، ونخرجو نِتظاهروا مع بعضنا في الشوارع:</p>

    <ul>
      <li>باش نطالبو بإلغاء قانون دارمانان والدوريات متاع ريتايو</li>
      <li>باش نطالبو بالمساواة في الحقوق: في التعليم، السكن، الصحة، الثقافة، والخدمة</li>
      <li>باش نطالبو بتسوية وضعية الناس اللي ما عندهمش أوراق</li>
      <li>باش نسكرو مراكز الاحتجاز الإداري (CRA)</li>
      <li>باش نوقفو مع العدالة الاجتماعية والتضامن، وضدّ العنصرية والفاشية</li>
    </ul>

    <p>إذَا تحبّ تشارك معانا، الرابط لتحت، عمّر الفورميلار وغدوة نوصلوك بالبرنامج</p>
  `
  },
"tzm-latn": {
  label: "ⵣ Tamazight (Latin)",
  rtl: false,
  audio: "",
  content: `
    <div class="intro">
      <p>ⵣ Ass war-neɣ : ma neḥbes, akk iḥbes !</p>

<p>Ass-a yettwasen deg Ussan agrawan n imeɣranen, 18 Dujanbir 2025.
 Asenfaɣ-a yebda-d s wid ur nesɛi ara ikaramen d wid iɣermanen, yessawen ar uɣen n tmedyazt d ttwizi mgal uɣaras n tnekkit n waddaden, d usenɣes n izerfan n imeɣranen deg Fransa.</p>
<p>Nexdem akken amek i yellan wagi i d-yennayen i yiman-nneɣ akk, imi ilugan n tnekkit d tneqqiwin n usensi yettawiɣen d afus i tmeɣtut, d wid i yetḥasen izerfan n yiman-nsen.</p> </div>
<p>Aṭas n ikemmuḥen, sindikaten, tajmaɛt d timura n temɣarin la ttunefken deg meṛṛa tamurt i Fransa akken ad nebnu-d ass-a n umennuɣ-a.</p>
<p>Ma telliḍ d win ur nesɛi ara ikaramen, d imeɣran, d mmi n imeɣran, n tallit yimezgi, tis snat neɣ tis kraḍ, d imdukkal, d iccura, d yixeddamen — ad neḥbes akk : tiḥerci, axeddim, ttzawla. Ad neffeɣ akk ar tiziwin deg meṛṛa tamurt :</p>

<ul>
  <li>I wugur n usenfaɣ n lqanun n Darmanin akked izerfan n Retailleau</li>
  <li>I wemgarrad n izerfan i yimanen merra : deg lmed, lxir, tesɛi, tazmert d uxeddim</li>
  <li>I uslelli n wid ur nesɛi ara ikaramen</li>
  <li>I usekkeṛ n yidlen n tenkra n tɣellist (CRA)</li>
  <li>I twizi d taseddast tamunt, mgal tnekkit d tfasiya</li>
</ul>

<p>Ma tebɣiḍ ad tettekkiḍ, ḥedd link n ddaw-a, ččar asen d imensi, ad k-d-nazen ulmad n usefrek.</p>
  `
},
 "tzm-tfng": {
  label: "ⵣ ⵜⴰⵎⴰⵣⵉⵖⵜ (Tifinagh)",
  rtl: false,
  audio: "",
  content: `
    <div class="intro">
      <p><strong>ⴰⵙⵓ ⵡⴰⵔⵏⴻⵖ : ⵎⴰ ⵏⴻⵃⴱⴻⵙ, ⴰⴽⴽ ⵉⵃⴱⴻⵙ !</strong></p>
      <p>ⴰⵙⵓ ⴰ ⵢⴻⵜⵜⵡⴰⵙⴻⵏ ⴷⴻⴳ ⵓⵙⵙⴰⵏ ⴰⴳⵔⴰⵡⴰⵏ ⵏ ⵉⵎⴻⵖⵔⴰⵏⴻⵏ, <strong>18 ⴷⵓⵊⴰⵏⴱⵉⵔ 2025</strong>.</p>
      <p>ⴰⵙⴻⵏⴼⴰⵖ ⴰ ⵢⴻⴱⴷⴰ-ⴷ ⵙ ⵡⵉⴷ ⵓⵔ ⵏⴻⵙⴻⵄⵉ ⴰⵔⴰ ⵉⴽⴰⵔⴰⵎⴻⵏ ⴷ ⵡⵉⴷ ⵉⵖⴻⵔⵎⴰⵏⴻⵏ, ⵢⴻⵙⵙⴰⵡⴻⵏ ⴰⵔ ⵓⵖⴻⵏ ⵏ ⵜⵎⴻⴷⵢⴰⵣⵜ ⴷ ⵜⵜⵡⵉⵣⵉ ⵎⴳⴰⵍ <strong>ⵓⵖⴰⵔⴰⵙ ⵏ ⵜⵏⴻⴽⴽⵉⵜ ⵏ ⵡⴰⴷⴷⴰⴷⴻⵏ</strong>, ⴷ ⵓⵙⴻⵏⵖⴻⵙ ⵏ ⵉⵣⴻⵔⴼⴰⵏ ⵏ ⵉⵎⴻⵖⵔⴰⵏⴻⵏ ⴷⴻⴳ ⴼⵔⴰⵏⵙⴰ.</p>
      <p>ⵏⴻⵅⴷⴻⵎ ⴰⴽⴽⴻⵏ ⴰⵎⴻⴽ ⵉ ⵢⴻⵍⵍⴰⵏ ⵡⴰⴳⵉ ⵉ ⵢⴻⵏⵏⴰⵢⴻⵏ ⵉⵢⵉⵎⴰⵏ-ⵏⴻⵖ ⴰⴽⴽ, ⵉⵎⵉ ⵉⵍⵓⴳⴰⵏ ⵏ ⵜⴻⵏⴻⴽⴽⵉⵜ ⴷ ⵜⵏⴻⵇⵇⵉⵡⵉⵏ ⵏ ⵓⵙⴻⵏⵙⵉ ⵢⴻⵜⵜⴰⵡⵉⵖⴻⵏ ⴷ ⴰⴼⵓⵙ ⵉ ⵜⵎⴻⵖⵜⵓⵜ, ⴷ ⵡⵉⴷ ⵉ ⵢⴻⵜⵜⵃⴰⵙⴻⵏ ⵉⵣⴻⵔⴼⴰⵏ ⵏ ⵉⵎⴻⵖⵔⴰⵏⴻⵏ.</p>
    </div>

    <p><strong>ⵜⵉⴼⵉⵏⴰⵖ — ⵜⵉⵏⵏⵓⴱⴳⴰ ⵏ ⵉⵎⴻⵖⵔⴰⵏⴻⵏ</strong></p>
    <p>ⴰⵙ ⴰⵙⵓ ⵏ 18 ⴷⵓⵊⴰⵏⴱⵉⵔ, ⴷ ⵜⵓⴳⴰ ⴰⴳⵔⴰⵡⵉⵏ ⵏ ⵉⵎⴻⵖⵔⴰⵏⴻⵏ, ⵏⵉⵙⵙⵓ ⵙ ⴷⵉⵙ ⵉⵣⵣⵓⴷⵉⵙ ⵉⵖⵔⴰⵡⵉⵏ :</p>
    <p>« ⴰⵙⵓ ⵡⴰⵔ-ⵏⴻⵖ : ⵎⴰ ⵏⴻⵃⴱⴻⵙ, ⴰⴽⴽ ⵉⵃⴱⴻⵙ ! »</p>

    <ul>
      <li>ⵉ ⵓⴳⵓⵔ ⵏ ⵓⵙⴻⵏⴼⴰⵖ ⵏ ⵍⵇⴰⵏⵓⵏ ⵏ <strong>ⴷⴰⵔⵎⴰⵏⵉⵏ</strong> ⴷ ⵉⵣⴻⵔⴼⴰⵏ ⵏ <strong>ⵔⵉⵜⴰⵢⵓ</strong>.</li>
      <li>ⵉ ⵡⴻⵎⴳⴰⵔⴰⴷ ⵏ ⵉⵣⴻⵔⴼⴰⵏ ⵉ ⵢⵉⵎⴰⵏⴻⵏ ⵎⴻⵔⵔⴰ : ⴳ ⵍⵎⴻⴷ, ⵍⵅⵉⵔ, ⵜⴻⵙⵄⵉ, ⵜⴰⵣⵎⵔⵜ ⴷ ⵓⴽⴷⴷⵉⵎ.</li>
      <li>ⵉ ⵓⵙⵍⴻⵍⵍⵉ ⵏ ⵡⵉⴷ ⵓⵔ ⵏⴻⵙⴻⵄⵉ ⴰⵔⴰ ⵉⴽⴰⵔⴰⵎⴻⵏ.</li>
      <li>ⵉ ⵓⵙⴻⴽⴽⴻⵔ ⵏ ⵢⵉⴷⵍⴻⵏ ⵏ ⵜⴻⵏⴽⵔⴰ ⵏ ⵜⵖⴻⵍⵍⵉⵙⵜ (CRA).</li>
      <li>ⵉ ⵜⵡⵉⵣⵉ ⴷ ⵜⴰⵙⴻⴷⴷⴰⵙⵜ ⵜⴰⵎⵓⵏⵜ, ⵎⴳⴰⵍ ⵜⵏⴻⴽⴽⵉⵜ ⴷ ⵜⴼⴰⵙⵉⵜ.</li>
    </ul>

    <p>ⵎⴰ ⵜⴻⴱⵖⵉⴹ ⴰⴷ ⵜⴻⵜⵜⴻⴽⴽⵉⴹ، ⵙⵓⵍⴼⴻⵖ <strong>ⵍⵉⵏⴽ</strong> ⴷⴷⴰⵡ-ⴰ، ⵞⵞⴰⵔ <strong>ⴼⵓⵔⵎⵉⵍⴻⵔ</strong>، ⴰⴷ ⴰⴽ-ⵏⴰⵣⴻⵏ <strong>ⵓⵍⵎⴰⴷ</strong>.</p>
  `
},
 ewo: {
  label: "🇨🇲 Ewondo",
  rtl: false,
  audio: "",
  content: `
    <div class="intro">
      <p><strong>Mvog mè an yi : nda an ba’a, mè bɛ̂ ba’a !</strong></p>
      <p>(La Journée Sans Nous : si on s’arrête, tout s’arrête !)</p>
      <p>Mvog mè an yi é mininga <strong>18 décembre 2025</strong>, mè nloé Journée internationale des migrant·e·s.</p>
      <p>Mvog a yi ndé nloé mbong o ndingan a sɔŋ e meyené, ngir bɔlo e ndingan a nganan e mvet, e meyené nloé eton e nkukuma nloé France.</p>
      <p>An bɔg e naŋ : a mbɔg maŋa mininga an bɔg a yi an bɔg bɛn !</p>
      <p>É bɛ̂ meyené e nganan, é bɔlo meyené a bɔg, é yèm a ngɔ e mvet, a nganan é bɛ̂ meyené e ndingan a nlong.</p>
      <p>Ngumba, syndicà, meyené e mefo, e nkukuma nloé France, é nloé meyené é bɛ̂ bɔg e mvog mè a yi.</p>
    </div>

    <p><strong>Meyené mè an bɔg :</strong></p>

    <ul>
      <li>Ndam ndé a tɛ́ kɛ́ é ndingan meyené.</li>
      <li>A tɛ́ bɛ̂ kɛ́ é sɔŋ, é meyené bɛ̂ nloé a ngɔ e nkukuma.</li>
      <li>A bɛ̂ meyené é ngɔ e nkukuma, wa meyené é bɛ̂ e meyené a bɔlo.</li>
    </ul>

    <p>Nloé <strong>18 décembre</strong>, é meyené nloé e meyené é ngɔ e nkukuma, an bɔg :</p>

    <p><strong>“Mvog mè an yi : nda an ba’a, mè bɛ̂ ba’a !”</strong></p>

    <ul>
      <li> Nda a ba’a loi Darmanin é Retailleau</li>
      <li> Nda meyené e ndingan meyené a sɔŋ, é mvet, e nkukuma, e mbolo, e meyené</li>
      <li> Nda meyené é ngɔ e nnam nloé é bɛ̂ bɔlo</li>
      <li> Nda nkukuma é ngɔ e mvet (CRA)</li>
      <li> Nda meyené e ndingan a sɔŋ, e meyené a ndingan a ngɔ e nnam, é bɛ̂ bɔg é meyené a ngɔ e mvet e meyené e nganan.</li>
    </ul>

    <p>So a bɔg a ngɔ é nnam, fɔ link nloé, si formilɛɛr, an bɛ̂ a yɔ programme.</p>
  `
},
dua: {
  label: "🇨🇲 Douala",
  rtl: false,
  audio: "",
 content: `
    <div class="intro">
      <p><strong>“Mokolo ma wɛna biso te : soki biso to kende, nyonso e kende !”</strong></p>
      <p>Mokolo ma wɛna biso te ma koki <strong>18 décembre 2025</strong>, mpo na mokolo ya bato ya mboka mosusu (Journée internationale des migrant·e·s).</p>
      <p>Mokolo oyo ezali na boyokani mpe politika, mpo na kobunda na mobulu ya etat, pasi ya mosala mpe kobebisama ya makoki ya bato ya mboka mosusu na France.</p>
      <p>Biso nyonso to yebi : kobunda oyo ezali mpo na biso nyonso, pamba te makambo ya mobulu mpe politike ya kopengola bato ezali kobebisa boyokani mpe makoki ya bato nyonso.</p>
      <p>Bato mingi, basindika, mpe mabongisi ya bato bazali kozwa mosala mpo na kosala mokolo oyo ya monene elongo.</p>
    </div>

    <p><strong>Maloba na biso :</strong></p>
    <p>Mboka oyo ekoki te kozala te soki bato ya mboka mosusu te. Ezali na bango nde mboka ezali kobika, mpe mboka ezali komona bolamu na bango. Ezali te bango bato bazali kobebisa mboka, kasi ezali politike mpe mobulu.</p>
    <p>Na <strong>18 décembre</strong>, na mokolo ya bato ya mboka mosusu, to lobeli :</p>
    <p><strong>“Mokolo ma wɛna biso te : soki biso to kende, nyonso e kende !”</strong></p>

    <p>Bato bazali na bapapiɛ mpe oyo bazali na te, bato ya mboka mosusu, bana ya bato ya mboka mosusu, ya liboso, ya mibale, ya misato, baninga, bavandi, basali, bayekoli — tokoboya kelasi, mosala, zando, mpe tokokende kosala manifestation elongo.</p>

    <p><strong>Tosɛngi :</strong></p>
    <ul>
      <li>Kolongola mibeko Darmanin mpe makambo ya Retailleau</li>
      <li>Kobatela makoki ya bato nyonso : kelasi, ndako, bokolɔ, makambo ya culture mpe mosala</li>
      <li>Kopesa bapapiɛ na bato oyo bazali na te</li>
      <li>Koboma bisika ya kofunda bato (CRA)</li>
      <li>Kosala mpo na boyokani, bomoko mpe kobunda na mobulu mpe fascisme</li>
    </ul>

    <p>Soki olingi kozala elongo na biso, finá na lien oyo, tála formilɛr, mpe tokotindela yo programme.</p>
  `
},
bas: {
  label: "🇨🇲 Bassa",
  rtl: false,
  audio: "",
    content: `
    <div class="intro">
      <p><strong>“Mɛŋɛ ma nɔ̀ an : ni an dɔ, bɛŋɛ ma dɔ !”</strong></p>
      <p>(La Journée Sans Nous : si on s’arrête, tout s’arrête !)</p>
      <p>Mɛŋɛ ma nɔ̀ an yi <strong>18 décembre 2025</strong>, po mɛŋɛ nji bɔ ǹdiŋ bô njambɛ (Journée internationale des migrant·e·s).</p>
      <p>Mɛŋɛ nɔ̀ an yi ngɔnyɛ ni mbom, po ndé mɛ njɔŋ, mɛ ǹdiŋ ni mbôm, ni mɛ lɛ bɔli njambɛ bô France.</p>
      <p>An bô nyi : mɛŋɛ nɔ̀ an yi an nyi, mɛŋɛ nɔ̀ an yi an dɔ !</p>
      <p>Ndé njambɛ bô njambɛ, mɛ njɔŋ ni mɛ ǹdiŋ yi bô, njambɛ ǹdiŋ yi bô, mɛ njɔŋ bô mɛn, a ǹdiŋ ǹdiŋ, a bô lɛ ǹdiŋ bô njambɛ.</p>
      <p>Bô njambɛ, syndicà, mbombog ni mbôm njambɛ bô France yi bô ngɔnyɛ ni mɛŋɛ nɔ̀ an yi.</p>
    </div>

    <p><strong>Nyambe an yi :</strong></p>
    <p>Ǹlo bô tɛ́ bô njambɛ ǹdiŋ. A tɛ́ bô njambɛ ǹdiŋ, mɛ njambɛ ǹdiŋ yi bô lɛ mɛn. Mɛ njambɛ ǹdiŋ yi bô lɛ mɛn, wa mɛ njɔŋ ni mɛ ǹdiŋ yi bô njambɛ.</p>
    <p>Ǹlo <strong>18 décembre</strong>, mɛŋɛ nji bô njambɛ, an yi :</p>
    <p><strong>“Mɛŋɛ ma nɔ̀ an : ni an dɔ, bɛŋɛ ma dɔ !”</strong></p>

    <p>Njambɛ bô njambɛ ni njambɛ ǹdiŋ, njambɛ ǹdiŋ bô njambɛ, njambɛ mɛn yi ngɔnyɛ, njambɛ bô nyi bô njambɛ, njambɛ ǹdiŋ yi bô njambɛ, a ǹdiŋ bô lɛ ǹdiŋ bô njambɛ : an bô dɔ bô njambɛ, bô mbôm, bô mbɔm, an yi lɛ bô njambɛ.</p>

    <p><strong>An yi bô :</strong></p>
    <ul>
      <li> Bô kôli mɛ lɛ <strong>Darmanin</strong> ni <strong>Retailleau</strong></li>
      <li> Bô nyi lɛ njambɛ ǹdiŋ bô njambɛ bô njambɛ : mbôm, mbɔm, mbombog, mbôm ni mɛ njambɛ</li>
      <li> Bô nyi njambɛ ǹdiŋ bô njambɛ bô njambɛ bô njambɛ bô njambɛ ǹdiŋ</li>
      <li> Bô nyi mɛ CRA (mbôm njambɛ ǹdiŋ)</li>
      <li> Bô nyi lɛ njambɛ, mbôm ni mbombog njambɛ, bô njambɛ ǹdiŋ ni njambɛ ni mɛ njambɛ ǹdiŋ.</li>
    </ul>

    <p>Ni a bô ngɔ nyi njambɛ an yi, fɛ link bô, fɔrmilɛr bô, an yi a ǹdiŋ bô programme.</p>
  `
}
};
