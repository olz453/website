const fetch = require('isomorphic-fetch');

(async () => {
    const response = await fetch('http://www.bom.gov.au/fwo/IDN60233/IDN60233.563024.tbl.shtml');
    const text = await response.text();
    var table = text.split('tr>').slice(867,-1).map(row => row.slice(17,-8).split('<td').filter(Boolean).map(col => col.replace('</td>\n','').replace(' align=right>',''))).filter(e => e.length)
    console.log(table);


  })();

(async () => {
  const response2 = await fetch('http://www.bom.gov.au/fwo/IDN60233/IDN60233.567098.tbl.shtml');
  const text2 = await response2.text();
  var table2 = text2.split('tr>').slice(1997,-1).map(row => row.slice(17,-8).split('<td').filter(Boolean).map(col => col.replace('</td>\n','').replace(' align=right>',''))).filter(e => e.length)
  console.log(table2);

})();

(async () => {
    const response3 = await fetch('http://www.bom.gov.au/fwo/IDN60233/IDN60233.567044.tbl.shtml');
    const text3 = await response3.text();
    var table3 = text3.split('tr>').slice(833,-1).map(row => row.slice(17,-8).split('<td').filter(Boolean).map(col => col.replace('</td>\n','').replace(' align=right>',''))).filter(e => e.length)
    console.log(table3);
  
  })();