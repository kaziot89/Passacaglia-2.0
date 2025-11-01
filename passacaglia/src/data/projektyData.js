const Jesien2Images = import.meta.glob("../Pictures/Jesien2/**/*", {
  eager: true,
});
// const Jesien2Gallery = Object.values(Jesien2Images).map((img) => img.default);

const Jesien2Gallery = {};

for (const path in Jesien2Images) {
  const cityMatch = path.match(/Jesien2\/([^/]+)\//); // wyłapuje nazwę folderu np. "Kamień"
  if (cityMatch) {
    const city = cityMatch[1];
    if (!Jesien2Gallery[city]) Jesien2Gallery[city] = [];
    Jesien2Gallery[city].push(Jesien2Images[path].default);
  }
}

const PrzestrzenImages = import.meta.glob("../Pictures/Przestrzen/*", {
  eager: true,
});
const PrzestrzenGallery = Object.values(PrzestrzenImages).map(
  (img) => img.default
);
const AdventImages = import.meta.glob("../Pictures/AdventConcert/*", {
  eager: true,
});
const AdventGallery = Object.values(AdventImages).map((img) => img.default);
const Jesien1Images = import.meta.glob("../Pictures/Jesien1/*", {
  eager: true,
});
const Jesien1Gallery = Object.values(Jesien1Images).map((img) => img.default);
const musNightImages = import.meta.glob("../Pictures/MusNight2024/*", {
  eager: true,
});
const musNightGallery = Object.values(musNightImages).map((img) => img.default);
const trisoImages = import.meta.glob("../Pictures/TRISOFriday/*", {
  eager: true,
});
const trisoGallery = Object.values(trisoImages).map((img) => img.default);

export const projektyData = [
  {
    id: 1,
    slug: "jesien-z-muzyka-dawna-2",
    title: "Jesień z muzyką dawną — II edycja",
    category: "aktualne",
    image: Object.values(Jesien2Gallery)[0][0],
    description: `
     Tegoroczna edycja festiwalu muzyki dawnej na Śląsku Opolskim już za nami. W ramach “Jesieni z muzyką dawną” w dniach 06-14.09.2025 odbyły się 4 koncerty: w Głuchołazach (Dom Artysty), Głogówku (Kościół św. Bartłomieja), Kamieniu Śląskim (Sanktuarium św. Jacka) oraz w Niemodlinie (Zamek Książęcy). Wystąpili znakomici artyści specjalizujący się w wykonawstwie historycznym. Odbyły się również dwa wydarzenia towarzyszące.
Otwierający cykl koncert w Głuchołazach prezentował słuchaczom muzykę kameralną mistrzów niemieckiego baroku, w wykonaniu Moniki Targowskiej (flet traverso), Marii Misiarz (wiolonczela barokowa) oraz Joanny Owczarek-Ciszewskiej (klawesyn). Lokalizacja w miejscu doświadczonym żywiołem powodzi miała za zadanie m.in. przywrócić ruch turystyczny i pokazać walory kulturalne miasta. 
Z kolei koncert w Głogówku, zatytułowany „Barokowa scena młodych” był okazją do promocji młodych, utalentowanych muzyków, dopiero rozpoczynających swoją ścieżkę artystyczną na polu wykonawstwa historycznego. W wyjątkowej przestrzeni kościoła św. Bartłomieja, będącego perłą baroku na opolszczyźnie, zabrzmiała muzyka dojrzałego baroku. Wystąpiły wyróżniające się studentki wydziału muzyki dawnej Akademii Muzycznej w Łodzi: Aleksandra Pawluczuk (flet traverso), Gabriela Pietraszewska-Bryła (obój barokowy), Karolina Kelm (wiolonczela barokowa) oraz Natalia Kwiecińska (klawesyn).
W Kamieniu Śląskim miał miejsce recital fortepianowy nawiązujący do tradycji poloneza oraz  postaci słynnych bohaterów. Polonez, pochodzący z XVI wieku, a znany pod obecną nazwą od wieku XVIII, jest jednym z pięciu tradycyjnych tańców polskich. Uznaje się go za taniec symboliczny - towarzyszące mu wartości, takie jak równość i współpraca, stanowią o jego integracyjnym charakterze. Recital p.t. „Muzyczny portret Bohatera” poświęcony tradycji poloneza i wielkim bohaterom polskiej historii, takim jak Tadeusz Kościuszko, wykonała na fortepianie historycznym Katarzyna Drogosz.
Finałowy koncert na Zamku w Niemodlinie poświęcony był muzyce renesansu, korespondującej z architekturą i historią zamku oraz przypadającą w tym roku 500. rocznicą złożenia hołdu lennego królowi Zygmuntowi I Staremu przez księcia Prus Albrechta Hohenzollerna (tzw. hołdu pruskiego). Muzykę tego czasu na tle tendencji europejskich przedstawił jedyny w Polsce konsort fletów renesansowych „La Viva Fiamma”. 
Jako dodatkowy element „Jesieni z muzyką dawną” miały miejsce 2 wydarzenia towarzyszące - spacery historyczne - po centrum Głogówka oraz terenu Zamku w Niemodlinie, bezpośrednio przed koncertami. 
Dziękujemy serdecznie wszystkim partnerom, patronom i współorganizatorom festiwalu, dzięki którym wydarzenie dotarło do szerokiej publiczności i spotkało się z entuzjazmem słuchaczy. Do zobaczenia za rok!

Współfinansowano ze środków otrzymanych od Samorządu Województwa Opolskiego. 
Patronat honorowy: Marszałek Województwa Opolskiego Szymon Ogłaza.
Patroni medialni: Radio Opole, Radio Doxa, TVP Opole, TVP Info, Nowa Trybuna Opolska
Partnerzy: Dam Artysty w Głuchołazach, Fundacja Benevolens, Parafia św. Bartłomieja w Głogówku, Muzeum Regionalne w Głogówku, Sanktuarium św. Jacka w Kamieniu Śląskim Centrum Kultury i Nauki  Wydziału Teologicznego Uniwersytetu Opolskiego, Fundacja na rzecz Zamku Książęcego Niemodlin 1313

    `,
    link: "https://example.com",
    gallery: Jesien2Gallery,
  },
  {
    id: 5,
    slug: "koncert-adwentowy",
    title: "Koncert adwentowy muzyki barokowej",
    category: "archiwalne",
    image: AdventGallery[0],
    description: `
  14.12.2024 r. w Muzeum Diecezjalnym w Opolu zabrzmiała na instrumentach historycznych muzyka barokowa na czas adwentu. W programie koncertu znalazły się dzieła J. S. Bacha, A. Vivaldiego, C. Ph. E. Bacha. Wystąpiły: Monika Targowska – flet traverso, Joanna Owczarek-Ciszewska - klawesyn, Maria Misiarz – wiolonczela barokowa. Dochód ze sprzedaży biletów został przeznaczony na cele statutowe Fundacji. 
    `,
    link: "https://example.com",
    gallery: AdventGallery,
  },
  {
    id: 4,
    slug: "slyszalny-krajobraz",
    title:
      "Przestrzeń poza czasem – słyszalny krajobraz.  Sonata fortepianowa i pejzaż u progu romantyzmu na przykładzie dzieł C. D. Friedricha i F. Schuberta",
    category: "archiwalne",
    image: PrzestrzenGallery[0],
    description: `
      24.10.2024 o godz. 18.30 w Muzeum Diecezjalnym w Opolu odbył się wykład Joanny Owczarek- Ciszewskiej na temat analogii w twórczości malarza Caspara Davida Friedricha oraz kompozytora Franciszka Schuberta. Po wykładzie miał miejsce koncert na fortepianie historycznym z lat 20. XiX wieku, podczas którego zabrzmiała Sonata-Fantazja G-dur op. 78 F. Schuberta w wykonaniu prelegentki. Wykład był współorganizowany przez Fundację wraz z Muzeum Diecezjalnym w ramach cyklu jesiennych wykładów „Caspar David Friedrich w dialogu sztuk”, poświęconych życiu i twórczości artysty.
    `,
    link: "https://example.com",
    gallery: PrzestrzenGallery,
  },
  {
    id: 3,
    slug: "jesien-z-muzyka-dawna-1",
    title: "Jesień z muzyką dawną — I edycja",
    category: "archiwalne",
    image: Jesien1Gallery[0],
    description: `
      I odsłona cyklicznej imprezy poświęconej wykonawstwu historycznemu pt. „Jesień z muzyką dawną”, organizowana przez naszą Fundację,  odbyła się w dniach 29.09.2024 oraz 6.10.2024 r. w 
Głogówku (Kościół św. Bartłomieja) i Prószkowie (dawny kościół ewangelicki). Wystapiły artystki specjalizujące się w wykonawstwie historycznym (Monika Targowska- flet traverso, Joanna Owczarek-Ciszewska- klawesyn), zaś koncerty poprowadziła muzykolog Paulina Wałaszek. W programie znalazły się dzieła epoki baroku i klasycyzmu uznanych mistrzów europejskich, jak i lokalnych twórców regionu opolskiego tych czasów (kompozycje m.in.: G.Ph. Telemanna, S. L.Weissa, F. Couperina, C.P. E. Bacha). Celem przedsięwzięcia było zwiększenie dostępności wydarzeń kulturalnych o wysokich walorach artystycznych dla mieszkańców miejscowości pozbawionych stałej oferty filharmoniczno-teatralnej, promocja muzyki dawnej na Śląsku Opolskim oraz kształtowanie świadomości dziedzictwa kulturowego regionu.

Współfinansowano ze środków otrzymanych od Samorządu Województwa Opolskiego
Patronat honorowy: Marszałek Województwa Opolskiego Szymon Ogłaza
Patronat medialny:Radio Opole, Radio Doxa oraz Nowa Trybuna Opolska
Partnerzy: Muzeum Regionalne w Głogówku, Parafia św. Bartłomieja w Głogówku oraz Ośrodek Kultury i Sportu w Prószkowie.
    `,
    link: "https://example.com",
    gallery: Jesien1Gallery,
  },
  {
    id: 2,
    slug: "noc-muzeow",
    title: "Noc Muzeów 2024",
    category: "archiwalne",
    image: musNightGallery[0],
    description: `
      Wspólnie z Muzeum Diecezjalnym w Opolu oraz Państwową Szkołą Muzyczną I i II st. im. F. Chopina  w dniu 18.05.2024 zorganizowaliśmy koncert pod tytułem „Muzyka dawna otulona sztuką”. Wydarzenie odbyło się w ramach 16. Nocy Muzeów - „Pod gwiazdami Europy”. Koncert z muzyką A. Vivaldiego, J. Melaniego, Ch. Dieuparta i J. S. Bacha został wykonany wspólnie z uczniami oraz absolwentami PSM I i II stopnia w Opolu w Muzeum Diecezjalnym. Projekt był dla nas szczególny ze względu na syntezę sztuki z muzyką, oraz integrację środowisk artystycznych miasta Opola.
    `,
    link: "https://example.com",
    gallery: musNightGallery,
  },
  {
    id: 1,
    slug: "barokowy-piatek",
    title: "Barokowy piątek w centrum TRISO",
    category: "archiwalne",
    image: trisoGallery[0],
    description: `
      8.05.2024 na zaproszenie Opolskiego Stowarzyszenia na Rzecz Rozwoju Dzieci z Trisomią 21 odbył się organizowany przez naszą Fundację koncert muzyki dawnej dla dzieci i młodzieży w Centrum Aktywności i Rehabilitacji TRISO w Opolu. Wystąpiły: Monika Targowska – flet traverso, Joanna Owczarek-Ciszewska – klawesyn, oraz Agata Wachowska – prowadzenie. Oprócz zaprezentowania tańców barokowych, porozmawialiśmy o historii, kulturze i sztuce baroku. Dzieci bardzo aktywnie uczestniczyły w spotkaniu, tańcząc, dyskutując i próbując gry na klawesynie. Projekt był ważnym elementem działalności edukacyjnej Fundacji Passacaglia, propagującej integrację i promocję muzyki dawnej w środowiskach zagrożonych wykluczeniem. 
    `,
    link: "https://example.com",
    gallery: trisoGallery,
  },
];
