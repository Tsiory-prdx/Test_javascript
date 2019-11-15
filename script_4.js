const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  function show_70s() {
      let seventies = [];
    entrepreneurs.forEach (entrepreneursContent => {
        if (entrepreneursContent.year >= 1970 && entrepreneursContent.year <= 1979){
            seventies.push(entrepreneursContent)
        };
    });
    console.log(seventies);
  }
    
  function name_and_surname() {
        let name_surname = [];
    entrepreneurs.forEach (entrepreneursContent => {
        name_surname.push({first_name: entrepreneursContent.first ,last_name: entrepreneursContent.last});
    });
    console.log(name_surname);
  }

  function today_s_age() {
      let withTodaysAge = [];
    entrepreneurs.forEach (entrepreneursContent => {
        ActualAge = new Date().getFullYear() - entrepreneursContent.year;
        withTodaysAge.push({first_name: entrepreneursContent.first , last_name: entrepreneursContent.last , Age: ActualAge});
    });
    console.log(withTodaysAge); 
  }

  function order_by_last_name(){
        let lastName = [];
    entrepreneurs.forEach (entrepreneursContent => {
        lastName.push(entrepreneursContent.last);
        orderedLastName = lastName.sort();
    });
        let allOrdered = [];
    orderedLastName.forEach (orderedContent => {
        entrepreneurs.forEach (entrepreneursContent => {
            if (orderedContent == entrepreneursContent.last){
                allOrdered.push(entrepreneursContent);
            }
        });
    });
    console.log(allOrdered)
  }

  console.log("Liste des entrepreneurs qui sont nés dans les années 70");
  show_70s();
  console.log("Array qui contient le prénom et le nom des entrepreneurs ;");
  name_and_surname();
  console.log("Array entrepreneur avec age actuel");
  today_s_age();
  console.log("Trie des entrepreneurs par ordre alphabétique du nom de famille");
  order_by_last_name();