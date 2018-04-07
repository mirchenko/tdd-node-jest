const uuid = require('uuid/v4');

exports.seed = (knex, Promise) => knex('posts').del()
  .then(() =>
    knex('posts').insert(
      [
        {
          id: uuid(),
          title: 'title1',
          content: 'Lorem ipsum dolor sit amet, ad quo eripuit propriae mnesarchum, dicant assentior has in, ut vim dicant ceteros. At nec melius impetus suscipit, sed ei partem inermis, sea esse bonorum indoctum eu. Id quidam vivendum duo, nec an iuvaret consulatu. Ut mei reque laudem labitur. Usu ad postea lucilius perpetua, ut vitae accumsan pertinacia duo.'
        },
        {
          id: uuid(),
          title: 'title2',
          content: 'Eros solet commodo ne has, malis labore vix ei, duo id prima adhuc idque. Vim ex integre eruditi, id pri discere scaevola. An duo consul offendit inciderint, affert invidunt et ius. Nemore detracto verterem vix no, ut quas tamquam dissentiunt his, iracundia voluptatum repudiandae mel ne. Agam case intellegebat ea per. Lorem persius in nec, wisi antiopam principes per cu, ut natum dictas quo.'
        },
        {
          id: uuid(),
          title: 'title3',
          content: 'Est alii saperet repudiare an, cu forensibus reprehendunt sea. Nibh nulla liberavisse at usu, paulo altera molestiae eam ne. Populo postea possim per cu, id est zril dolore veritus, sanctus hendrerit definiebas qui at. Mel utroque consetetur neglegentur ne, eu mel unum singulis maiestatis. Viris pericula consequuntur sed eu, posse legimus mel te.'
        },
        {
          id: uuid(),
          title: 'title4',
          content: 'Salutandi expetenda assentior mel te. Periculis adolescens efficiantur te qui, ea perpetua vulputate interpretaris vim, ex deseruisse intellegebat qui. Vim at falli abhorreant. In sit eros quodsi. An ullum evertitur efficiantur ius, ubique salutatus mei ea, possit explicari scripserit quo ne.'
        },
      ]
    ));
