import Jesienimg from "../Pictures/jesienzfletem.jpg";
import redclavecin from "../Pictures/redclavecin.jpg";
import paniezkwiatami from "../Pictures/paniezkwiatami.jpg";

export const projektyData = [
  {
    id: 1,
    slug: "jesien-z-muzyka-dawna",
    title: "Jesień z muzyką dawną — II edycja",
    category: "aktualne",
    image: paniezkwiatami,
    description: `
      Druga edycja cyklu koncertów poświęconych muzyce dawnej. 
      W ramach projektu zaprezentowane zostaną unikalne dzieła barokowe 
      w wykonaniu młodych artystów, z wykorzystaniem instrumentów historycznych.
    `,
    link: "https://example.com",
    gallery: [Jesienimg, Jesienimg, Jesienimg, Jesienimg, Jesienimg],
  },
  {
    id: 2,
    slug: "muzyka-i-przestrzen",
    title: "Muzyka i przestrzeń — koncerty site-specific",
    category: "archiwalne",
    image: Jesienimg,
    description: `
      Projekt eksplorujący dialog między muzyką a architekturą. 
      Koncerty odbywały się w nietypowych lokalizacjach, takich jak pałace, 
      ogrody czy zabytkowe dziedzińce.
    `,
    link: "https://example.com",
  },
  {
    id: 3,
    slug: "przestrzen-poza-czasem",
    title:
      "Przestrzeń poza czasem – słyszalny krajobraz.  Sonata fortepianowa i pejzaż u progu romantyzmu na przykładzie dzieł C. D. Friedricha i F. Schuberta",
    category: "archiwalne",
    image: redclavecin,
    description: `
      24.10.2024 o godz. 18.30 w Muzeum Diecezjalnym w Opolu odbył się wykład Joanny Owczarek- Ciszewskiej na temat analogii w twórczości malarza Caspara Davida Friedricha oraz kompozytora Franciszka Schuberta. Po wykładzie miał miejsce koncert na fortepianie historycznym z lat 20. XiX wieku, podczas którego zabrzmiała Sonata-Fantazja G-dur op. 78 F. Schuberta w wykonaniu prelegentki. Wykład był współorganizowany przez Fundację wraz z Muzeum Diecezjalnym w ramach cyklu jesiennych wykładów „Caspar David Friedrich w dialogu sztuk”, poświęconych życiu i twórczości artysty.
    `,
    link: "https://example.com",
  },
];
