'use strict';

/**
 * @ngdoc function
 * @name dptApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the durbrowPerformanceAngularApp
 */

app.factory('ClientResults', function(){
  var newResults = {
    "newDataSet": {
      "Table": [
        {
          "FirstName": "John",
          "LastName": "Will",
          "Date": "7/4/2005",
          "BF": "18"
        },
        {
          "FirstName": "Callie",
          "LastName": "Durbrow",
          "Date": "3/2/2014",
          "BF": "27.6",
          "WA": "14.3",
          "TR": "11.8",
          "HI": "9.3"
        },
        {
          "FirstName": "Emily",
          "LastName": "Boynton",
          "Date": "9/4/2014",
          "BF": "22.7",
          "WA": "17.5",
          "TR": "8.3",
          "HI": "1.9"
        },
        {
          "FirstName": "John ",
          "LastName": "Park",
          "Date": "5/12/2014",
          "BF": "19.9",
          "TH": "7.8",
          "CH": "11",
          "WA": "14.7"
        },
        {
          "FirstName": "Sandra",
          "LastName": "Brown",
          "Date": "10/21/2013",
          "BF": "33.4",
          "WA": "29.1",
          "TR": "10.6",
          "HI": "15.2"
        },
        {
          "FirstName": "Veronica",
          "LastName": "Penella",
          "Date": "4/10/2014",
          "BF": "35.3",
          "WA": "33.9",
          "TR": "13.3",
          "HI": "16.2"
        },
        {
          "FirstName": "Sarah",
          "LastName": "Lusk",
          "Date": "8/31/2014",
          "BF": "34.1",
          "WA": "36.5",
          "TR": "8.5",
          "HI": "17.5"
        },
        {
          "FirstName": "Emily",
          "LastName": "Cohen",
          "Date": "7/17/2014",
          "BF": "35.3",
          "WA": "34",
          "TR": "11.6",
          "HI": "19.3"
        },
        {
          "FirstName": "Andrew ",
          "LastName": "Tang",
          "Date": "6/28/2014",
          "BF": "18.3",
          "TH": "4.2",
          "CH": "6.5",
          "WA": "24.4"
        },
        {
          "FirstName": "christine",
          "LastName": "chan",
          "Date": "6/26/2014",
          "BF": "24.1",
          "WA": "11.2",
          "TR": "9",
          "HI": "8.9"
        },
        {
          "FirstName": "Sarah",
          "LastName": "Barone",
          "Date": "6/7/2014",
          "BF": "27",
          "WA": "23",
          "TR": "13.2",
          "HI": "1.8"
        },
        {
          "FirstName": "Meaghan",
          "LastName": "Connors",
          "Date": "3/12/2014",
          "BF": "22.9",
          "WA": "10.8",
          "TR": "9",
          "HI": "7.5"
        },
        {
          "FirstName": "caitlin",
          "LastName": "calonge",
          "Date": "6/30/2014",
          "BF": "32.2",
          "WA": "31.8",
          "TR": "9.1",
          "HI": "13.3"
        },
        {
          "FirstName": "Samantha",
          "LastName": "Lambert",
          "Date": "10/23/2013",
          "BF": "31.8",
          "WA": "38.3",
          "TR": "12.9",
          "HI": "6.4"
        },
        {
          "FirstName": "Nazih",
          "LastName": "Hamza",
          "Date": "7/29/2014",
          "BF": "27.4",
          "TH": "9.5",
          "CH": "13.2",
          "WA": "25.4"
        },
        {
          "FirstName": "Dee",
          "LastName": "Ferretti",
          "Date": "10/23/2013",
          "BF": "33.3",
          "WA": "20.3",
          "TR": "12.2",
          "HI": "18.3"
        },
        {
          "FirstName": "Chrissy",
          "LastName": "Civiletto",
          "Date": "6/2/2014",
          "BF": "28.6",
          "WA": "15.1",
          "TR": "15",
          "HI": "7.2"
        },
        {
          "FirstName": "Josh",
          "LastName": "Navikonis",
          "Date": "2/12/2014",
          "BF": "19",
          "TH": "7.1",
          "CH": "6.1",
          "WA": "21"
        },
        {
          "FirstName": "Jessica",
          "LastName": "Harris",
          "Date": "4/1/2014",
          "BF": "32.6",
          "WA": "17.8",
          "TR": "13.4",
          "HI": "16.1"
        },
        {
          "FirstName": "Veronica",
          "LastName": "Alas",
          "Date": "8/28/2014",
          "BF": "32",
          "WA": "15.8",
          "TR": "12.7",
          "HI": "16.9"
        },
        {
          "FirstName": "Nikla",
          "LastName": "Crane",
          "Date": "7/16/2014",
          "BF": "25.1",
          "WA": "17",
          "TR": "9.1",
          "HI": "5.4"
        },
        {
          "FirstName": "Marya",
          "LastName": "Wegman",
          "Date": "8/25/2014",
          "BF": "25.8",
          "WA": "12.2",
          "TR": "9.4",
          "HI": "10.5"
        },
        {
          "FirstName": "Samantha",
          "LastName": "Slater",
          "Date": "8/17/2014",
          "BF": "28.9",
          "WA": "14.1",
          "TR": "12.2",
          "HI": "11.7"
        },
        {
          "FirstName": "Steve",
          "LastName": "Sarao",
          "Date": "10/28/2013",
          "BF": "22.4",
          "TH": "11.9",
          "CH": "10.7",
          "WA": "12.1"
        },
        {
          "FirstName": "John",
          "LastName": "Pham",
          "Date": "4/9/2014",
          "BF": "7.3",
          "TH": "3.3",
          "CH": "2.5",
          "WA": "5.1"
        },
        {
          "FirstName": "Abbey ",
          "LastName": "Barrett",
          "Date": "3/31/2014",
          "BF": "29.3",
          "WA": "13.2",
          "TR": "17.8",
          "HI": "8.9"
        },
        {
          "FirstName": "Erica",
          "LastName": "Fernandez",
          "Date": "3/26/2014",
          "BF": "29.4",
          "WA": "13.5",
          "TR": "12.6",
          "HI": "12.8"
        },
        {
          "FirstName": "Laura",
          "LastName": "Quinn",
          "Date": "10/28/2013",
          "BF": "29.7",
          "WA": "22.4",
          "TR": "15",
          "HI": "5.6"
        },
        {
          "FirstName": "Judy",
          "LastName": "Ramirez",
          "Date": "12/19/2013",
          "BF": "22.8",
          "WA": "12.8",
          "TR": "7.4",
          "HI": "6.8"
        },
        {
          "FirstName": "Jen",
          "LastName": "Brock",
          "Date": "7/28/2014",
          "BF": "26.6",
          "WA": "26.9",
          "TR": "7.1",
          "HI": "5.6"
        },
        {
          "FirstName": "Caitlin",
          "LastName": "Clancy",
          "Date": "6/10/2014",
          "BF": "31.1",
          "WA": "16.8",
          "TR": "10.4",
          "HI": "16.2"
        },
        {
          "FirstName": "Kamie",
          "LastName": "Richard",
          "Date": "10/29/2013",
          "BF": "26.9",
          "WA": "19.6",
          "TR": "12.5",
          "HI": "4.1"
        },
        {
          "FirstName": "Seth",
          "LastName": "Tisue",
          "Date": "7/17/2014",
          "BF": "10.4",
          "TH": "6.9",
          "CH": "5.5",
          "WA": "2.6"
        },
        {
          "FirstName": "David",
          "LastName": "Mish",
          "Date": "3/27/2014",
          "BF": "13.9",
          "TH": "7",
          "CH": "8.1",
          "WA": "7"
        },
        {
          "FirstName": "Matt",
          "LastName": "Dionne",
          "Date": "2/26/2014",
          "BF": "21.4",
          "TH": "9.8",
          "CH": "12.9",
          "WA": "11.3"
        },
        {
          "FirstName": "Christopher",
          "LastName": "Barnes",
          "Date": "9/8/2014",
          "BF": "13.5",
          "TH": "8.5",
          "CH": "6.3",
          "WA": "6.9"
        },
        {
          "FirstName": "Jared",
          "LastName": "Graves",
          "Date": "9/8/2014",
          "BF": "11.2",
          "TH": "5.7",
          "CH": "5.9",
          "WA": "6.4"
        },
        {
          "FirstName": "Michelle",
          "LastName": "Sullivan",
          "Date": "1/15/2014",
          "BF": "34.1",
          "WA": "38.7",
          "TR": "8.1",
          "HI": "16.8"
        },
        {
          "FirstName": "Jill",
          "LastName": "Lamb",
          "Date": "10/30/2013",
          "BF": "30.4",
          "WA": "25.9",
          "TR": "11.8",
          "HI": "8.7"
        },
        {
          "FirstName": "Kristina",
          "LastName": "Dupont",
          "Date": "10/30/2013",
          "BF": "23.5",
          "WA": "11.9",
          "TR": "7.8",
          "HI": "8.5"
        },
        {
          "FirstName": "Jane",
          "LastName": "Yi",
          "Date": "2/19/2014",
          "BF": "32.7",
          "WA": "14.4",
          "TR": "14.4",
          "HI": "18.9"
        },
        {
          "FirstName": "Rippi",
          "LastName": "Rekhi",
          "Date": "4/21/2014",
          "BF": "21.1",
          "TH": "13.2",
          "CH": "13.6",
          "WA": "8.5"
        },
        {
          "FirstName": "Jack",
          "LastName": "Callahan",
          "Date": "10/30/2013",
          "BF": "22.6",
          "TH": "9.8",
          "CH": "12.5",
          "WA": "16.7"
        },
        {
          "FirstName": "Cecilia",
          "LastName": "Roncone",
          "Date": "3/27/2014",
          "BF": "34.2",
          "WA": "34.1",
          "TR": "16.1",
          "HI": "10.5"
        },
        {
          "FirstName": "Christine",
          "LastName": "Huard",
          "Date": "8/25/2014",
          "BF": "25.1",
          "WA": "13.5",
          "TR": "7.3",
          "HI": "10"
        },
        {
          "FirstName": "Katie",
          "LastName": "Kamradt",
          "Date": "4/4/2014",
          "BF": "24.8",
          "WA": "21.3",
          "TR": "10.1",
          "HI": "1.7"
        },
        {
          "FirstName": "Anna ",
          "LastName": "Ferrentino/ Barroso",
          "Date": "8/28/2014",
          "BF": "30.9",
          "WA": "17.5",
          "TR": "17.1",
          "HI": "9.2"
        },
        {
          "FirstName": "Filipe",
          "LastName": "Barroso",
          "Date": "8/28/2014",
          "BF": "14.5",
          "TH": "8.7",
          "CH": "5.7",
          "WA": "9.6"
        },
        {
          "FirstName": "Sarah",
          "LastName": "Deschaine",
          "Date": "9/3/2014",
          "BF": "36.5",
          "WA": "29.3",
          "TR": "16.8",
          "HI": "20.1"
        },
        {
          "FirstName": "Sandra",
          "LastName": "Bears",
          "Date": "12/22/2013",
          "BF": "28.1",
          "WA": "16.6",
          "TR": "10.1",
          "HI": "10.4"
        },
        {
          "FirstName": "Kristine",
          "LastName": "Sand",
          "Date": "9/3/2014",
          "BF": "29.3",
          "WA": "17.4",
          "TR": "10.8",
          "HI": "11.5"
        },
        {
          "FirstName": "Meagan",
          "LastName": "Turner",
          "Date": "2/21/2014",
          "BF": "30.5",
          "WA": "16.5",
          "TR": "11.8",
          "HI": "13.4"
        },
        {
          "FirstName": "Kate",
          "LastName": "Hollis",
          "Date": "11/4/2013",
          "BF": "37.1",
          "WA": "25.6",
          "TR": "21.8",
          "HI": "22.1"
        },
        {
          "FirstName": "Barbara",
          "LastName": "Langone",
          "Date": "4/2/2014",
          "BF": "31.6",
          "WA": "19.6",
          "TR": "8.5",
          "HI": "19.1"
        },
        {
          "FirstName": "Sarah",
          "LastName": "Hocking",
          "Date": "8/7/2014",
          "BF": "26.7",
          "WA": "17.6",
          "TR": "8.9",
          "HI": "8.3"
        },
        {
          "FirstName": "Gabe",
          "LastName": "Corbellini",
          "Date": "7/24/2014",
          "BF": "23.9",
          "TH": "8.9",
          "CH": "8.4",
          "WA": "25.8"
        },
        {
          "FirstName": "Michelle",
          "LastName": "Pucillo",
          "Date": "6/17/2014",
          "BF": "19.7",
          "WA": "8.8",
          "TR": "7.8",
          "HI": "5.1"
        },
        {
          "FirstName": "Mandar",
          "LastName": "Padmawar",
          "Date": "2/13/2014",
          "BF": "19.2",
          "TH": "6.9",
          "CH": "8.4",
          "WA": "18.3"
        },
        {
          "FirstName": "Rachel",
          "LastName": "Marrinan",
          "Date": "11/5/2013",
          "BF": "29.3",
          "WA": "24",
          "TR": "10.2",
          "HI": "8.8"
        },
        {
          "FirstName": "Frank",
          "LastName": "Pellegrini",
          "Date": "9/6/2014",
          "BF": "17.7",
          "TH": "6",
          "CH": "12",
          "WA": "11.2"
        },
        {
          "FirstName": "Liz",
          "LastName": "Graham-Meredith",
          "Date": "6/5/2014",
          "BF": "29.7",
          "WA": "23.6",
          "TR": "11.3",
          "HI": "8.8"
        },
        {
          "FirstName": "Shonda",
          "LastName": "Ettienne",
          "Date": "6/28/2014",
          "BF": "32.8",
          "WA": "26.4",
          "TR": "9.4",
          "HI": "16.9"
        },
        {
          "FirstName": "sephora",
          "LastName": "bernard",
          "Date": "8/23/2014",
          "BF": "32.4",
          "WA": "23",
          "TR": "15.9",
          "HI": "10.5"
        },
        {
          "FirstName": "peter",
          "LastName": "griffith",
          "Date": "2/19/2014",
          "BF": "14.7",
          "TH": "3.7",
          "CH": "6.4",
          "WA": "13.6"
        },
        {
          "FirstName": "Liz",
          "LastName": "Gaskell",
          "Date": "2/26/2014",
          "BF": "32.6",
          "WA": "21.9",
          "TR": "13.7",
          "HI": "13.4"
        },
        {
          "FirstName": "Divya",
          "LastName": "Errabelli",
          "Date": "11/6/2013",
          "BF": "31.4",
          "WA": "39.5",
          "TR": "17.3",
          "HI": "1.6"
        },
        {
          "FirstName": "susan",
          "LastName": "barrett",
          "Date": "2/15/2014",
          "BF": "35.6"
        },
        {
          "FirstName": "Alica",
          "LastName": "Fonzi",
          "Date": "11/6/2013",
          "BF": "29.2",
          "WA": "13.6",
          "TR": "11.3",
          "HI": "13.7"
        },
        {
          "FirstName": "Stephanie",
          "LastName": "Reynolds"
        },
        {
          "FirstName": "Stephanie",
          "LastName": "Reynolds",
          "Date": "12/21/2013",
          "BF": "33.1",
          "WA": "25.9",
          "TR": "15.4",
          "HI": "11"
        },
        {
          "FirstName": "Alison",
          "LastName": "Bears",
          "Date": "11/6/2013",
          "BF": "31.7",
          "WA": "33.4",
          "TR": "8.7",
          "HI": "11.8"
        },
        {
          "FirstName": "Alison",
          "LastName": "Krause",
          "Date": "11/6/2013",
          "BF": "28.3",
          "WA": "22.3",
          "TR": "11.1",
          "HI": "6.9"
        },
        {
          "FirstName": "Danielle",
          "LastName": "Panos",
          "Date": "6/4/2014",
          "BF": "34.1",
          "WA": "17.5",
          "TR": "17.5",
          "HI": "17.4"
        },
        {
          "FirstName": "Samantha",
          "LastName": "Godin",
          "Date": "8/31/2014",
          "BF": "34.6",
          "WA": "19.1",
          "TR": "17.4",
          "HI": "18"
        },
        {
          "FirstName": "Chet",
          "LastName": "Murray",
          "Date": "9/6/2014",
          "BF": "14.8",
          "TH": "5.2",
          "CH": "3.2",
          "WA": "16.4"
        },
        {
          "FirstName": "Steven",
          "LastName": "Godere",
          "Date": "11/7/2013",
          "BF": "25.8",
          "TH": "10.4",
          "CH": "8.8",
          "WA": "44.9"
        },
        {
          "FirstName": "Laura",
          "LastName": "Duenas",
          "Date": "9/3/2014",
          "BF": "31.1",
          "WA": "18",
          "TR": "9.9",
          "HI": "16.2"
        },
        {
          "FirstName": "walter",
          "LastName": "klinke",
          "Date": "6/27/2014",
          "BF": "14.5",
          "TH": "6.4",
          "CH": "5.4",
          "WA": "11.6"
        },
        {
          "FirstName": "REBECCA",
          "LastName": "CORAS",
          "Date": "4/4/2014",
          "BF": "34",
          "WA": "19.4",
          "TR": "15.6",
          "HI": "16.8"
        },
        {
          "FirstName": "MEGHAN",
          "LastName": "SHADRICK",
          "Date": "12/20/2013",
          "BF": "22.8",
          "WA": "15.7",
          "TR": "6.7",
          "HI": "4.6"
        },
        {
          "FirstName": "VICTORIA",
          "LastName": "HILL",
          "Date": "8/16/2014",
          "BF": "22.5",
          "WA": "17.2",
          "TR": "6.9",
          "HI": "3.2"
        },
        {
          "FirstName": "Nicole",
          "LastName": "Strong",
          "Date": "8/16/2014",
          "BF": "38.7",
          "WA": "39",
          "TR": "22.7",
          "HI": "21.9"
        },
        {
          "FirstName": "Kara",
          "LastName": "Guedes",
          "Date": "9/5/2014",
          "BF": "26.6",
          "WA": "23.3",
          "TR": "6.4",
          "HI": "7.7"
        },
        {
          "FirstName": "Kathy",
          "LastName": "Conkey",
          "Date": "9/6/2014",
          "BF": "25.6",
          "WA": "17.8",
          "TR": "7.1",
          "HI": "7.8"
        },
        {
          "FirstName": "Kate",
          "LastName": "O'Connor",
          "Date": "6/19/2014",
          "BF": "25.6",
          "WA": "9.9",
          "TR": "12.1",
          "HI": "9.9"
        },
        {
          "FirstName": "Emily",
          "LastName": "Munoz",
          "Date": "8/20/2014",
          "BF": "25.6",
          "WA": "16.8",
          "TR": "11.9",
          "HI": "3.7"
        },
        {
          "FirstName": "Aaradhana",
          "LastName": "Prajapati",
          "Date": "4/1/2014",
          "BF": "26.6",
          "WA": "24.6",
          "TR": "6.5",
          "HI": "7.1"
        },
        {
          "FirstName": "Maureen",
          "LastName": "O'Donnell",
          "Date": "8/11/2014",
          "BF": "20.3",
          "WA": "6.8",
          "TR": "9.9",
          "HI": "6.1"
        },
        {
          "FirstName": "Benie",
          "LastName": "Baldeo"
        },
        {
          "FirstName": "Benie",
          "LastName": "Baldeo",
          "Date": "7/30/2014",
          "BF": "29.3",
          "WA": "17.5",
          "TR": "8",
          "HI": "14.3"
        },
        {
          "FirstName": "Lauren",
          "LastName": "Verrico"
        },
        {
          "FirstName": "Lauren",
          "LastName": "Verrico",
          "Date": "1/23/2014",
          "BF": "33.7",
          "WA": "25.7",
          "TR": "18.2",
          "HI": "11.3"
        },
        {
          "FirstName": "Ellen",
          "LastName": "Nahm",
          "Date": "11/13/2013",
          "BF": "36.6",
          "WA": "31.2",
          "TR": "14.3",
          "HI": "23.7"
        },
        {
          "FirstName": "Kristina",
          "LastName": "Moron",
          "Date": "9/4/2014",
          "BF": "27.9",
          "WA": "13.6",
          "TR": "11",
          "HI": "11.5"
        },
        {
          "FirstName": "Robert",
          "LastName": "Krivoich",
          "Date": "4/3/2014",
          "BF": "21.9",
          "TH": "5.3",
          "CH": "11",
          "WA": "18.3"
        },
        {
          "FirstName": "Liz",
          "LastName": "Stack",
          "Date": "11/18/2013",
          "BF": "34.7",
          "WA": "33.4",
          "TR": "13.5",
          "HI": "13.9"
        },
        {
          "FirstName": "Heather",
          "LastName": "Davis",
          "Date": "12/19/2013",
          "BF": "32.9",
          "WA": "30.2",
          "TR": "11.9",
          "HI": "12.6"
        },
        {
          "FirstName": "Whitney",
          "LastName": "Brown",
          "Date": "11/18/2013",
          "BF": "30.4",
          "WA": "23.8",
          "TR": "10.3",
          "HI": "11.1"
        },
        {
          "FirstName": "Rob",
          "LastName": "Mathews",
          "Date": "12/16/2013",
          "BF": "30.5",
          "TH": "9.8",
          "CH": "28.6",
          "WA": "21.3"
        },
        {
          "FirstName": "Ariana",
          "LastName": "Paulson",
          "Date": "12/16/2013",
          "BF": "24.3",
          "WA": "10.3",
          "TR": "11.9",
          "HI": "7.3"
        },
        {
          "FirstName": "Laura",
          "LastName": "Vecchio",
          "Date": "9/6/2014",
          "BF": "29.7",
          "WA": "21.1",
          "TR": "10.7",
          "HI": "10.5"
        },
        {
          "FirstName": "Adam",
          "LastName": "Boynton",
          "Date": "11/25/2013",
          "BF": "24.4",
          "TH": "8",
          "CH": "10.1",
          "WA": "35.2"
        },
        {
          "FirstName": "scott",
          "LastName": "brown",
          "Date": "11/26/2013",
          "BF": "18.5",
          "TH": "5.8",
          "CH": "8.1",
          "WA": "19.2"
        },
        {
          "FirstName": "carlene",
          "LastName": "turner",
          "Date": "11/30/2013",
          "BF": "31.2",
          "WA": "43.4",
          "TR": "14.7",
          "HI": "1.8"
        },
        {
          "FirstName": "Kay",
          "LastName": "Coughlin",
          "Date": "3/27/2014",
          "BF": "30.2",
          "WA": "13",
          "TR": "16.2",
          "HI": "11.8"
        },
        {
          "FirstName": "Chrystal",
          "LastName": "McDonald",
          "Date": "12/4/2013",
          "BF": "37.5",
          "WA": "38.7",
          "TR": "14.7",
          "HI": "23"
        },
        {
          "FirstName": "Darcy",
          "LastName": "Rodriguez",
          "Date": "12/5/2013",
          "BF": "29.2",
          "WA": "16",
          "TR": "12.8",
          "HI": "10"
        },
        {
          "FirstName": "Chanda",
          "LastName": "Robe",
          "Date": "5/21/2014",
          "BF": "24",
          "WA": "14.1",
          "TR": "8.8",
          "HI": "6.2"
        },
        {
          "FirstName": "Lynn",
          "LastName": "Walters",
          "Date": "9/4/2014",
          "BF": "33.9",
          "WA": "17.7",
          "TR": "14.8",
          "HI": "19.3"
        },
        {
          "FirstName": "Dave",
          "LastName": "Shadrick",
          "Date": "2/21/2014",
          "BF": "17.9",
          "TH": "7.8",
          "CH": "4.7",
          "WA": "17.2"
        },
        {
          "FirstName": "Natasha",
          "LastName": "Buono",
          "Date": "8/7/2014",
          "BF": "34.7",
          "WA": "26",
          "TR": "10.8",
          "HI": "23.8"
        },
        {
          "FirstName": "Erica",
          "LastName": "Ayotte",
          "Date": "12/16/2013",
          "BF": "37.9",
          "WA": "30.5",
          "TR": "20.2",
          "HI": "24.7"
        },
        {
          "FirstName": "Dana",
          "LastName": "Cokely",
          "Date": "12/16/2013",
          "BF": "40.7",
          "WA": "55.4",
          "TR": "30.2",
          "HI": "27.9"
        },
        {
          "FirstName": "Chinna",
          "LastName": "Udoji",
          "Date": "12/17/2013",
          "BF": "35.9",
          "WA": "33.8",
          "TR": "24.4",
          "HI": "10.7"
        },
        {
          "FirstName": "Becky",
          "LastName": "White",
          "Date": "6/14/2014",
          "BF": "31.6",
          "WA": "14.7",
          "TR": "15.7",
          "HI": "13.4"
        },
        {
          "FirstName": "Karen",
          "LastName": "Enriquez",
          "Date": "8/23/2014",
          "BF": "27.6",
          "WA": "28.4",
          "TR": "11",
          "HI": "2.9"
        },
        {
          "FirstName": "Grace",
          "LastName": "Pasciullo",
          "Date": "8/27/2014",
          "BF": "21.5",
          "WA": "11.2",
          "TR": "6.4",
          "HI": "7.2"
        },
        {
          "FirstName": "Shannon",
          "LastName": "Rogato",
          "Date": "12/18/2013",
          "BF": "32.9",
          "WA": "23.8",
          "TR": "13.7",
          "HI": "13.4"
        },
        {
          "FirstName": "Loujain",
          "LastName": "Shorbatli",
          "Date": "8/30/2014",
          "BF": "25.8",
          "WA": "16.7",
          "TR": "9.4",
          "HI": "6.6"
        },
        {
          "FirstName": "Kyong",
          "LastName": "Yi",
          "Date": "12/20/2013",
          "BF": "24.2",
          "TH": "7.6",
          "CH": "13.1",
          "WA": "21.1"
        },
        {
          "FirstName": "Elizabeth",
          "LastName": "Vallis",
          "Date": "6/18/2014",
          "BF": "23.1",
          "WA": "12.1",
          "TR": "7.6",
          "HI": "7.7"
        },
        {
          "FirstName": "Lynne",
          "LastName": "Prevost",
          "Date": "6/25/2014",
          "BF": "23.5",
          "WA": "15.2",
          "TR": "8.2",
          "HI": "4.4"
        },
        {
          "FirstName": "Crystal",
          "LastName": "Woody",
          "Date": "6/28/2014",
          "BF": "37.4",
          "WA": "46",
          "TR": "15.9",
          "HI": "16.8"
        },
        {
          "FirstName": "Jennifer",
          "LastName": "Glanville",
          "Date": "9/5/2014",
          "BF": "32.5",
          "WA": "23",
          "TR": "9.3",
          "HI": "18.5"
        },
        {
          "FirstName": "Marianne",
          "LastName": "Buonopane",
          "Date": "12/30/2013",
          "BF": "33",
          "WA": "25.4",
          "TR": "11.5",
          "HI": "15"
        },
        {
          "FirstName": "meghan",
          "LastName": "Kiernan",
          "Date": "2/19/2014",
          "BF": "31.7",
          "WA": "29.6",
          "TR": "8.8",
          "HI": "13.2"
        },
        {
          "FirstName": "Mimi",
          "LastName": "Do",
          "Date": "2/25/2014",
          "BF": "34.8",
          "WA": "27.2",
          "TR": "12.5",
          "HI": "19.7"
        },
        {
          "FirstName": "Yousef",
          "LastName": "Dashkandi"
        },
        {
          "FirstName": "Yousef",
          "LastName": "Dashkandi",
          "Date": "1/2/2014",
          "BF": "28.6",
          "TH": "10.1",
          "CH": "20.4",
          "WA": "31.3"
        },
        {
          "FirstName": "Erica",
          "LastName": "Evans",
          "Date": "2/14/2014",
          "BF": "36.7",
          "WA": "33.2",
          "TR": "18.7",
          "HI": "16.3"
        },
        {
          "FirstName": "Kate",
          "LastName": "Moore",
          "Date": "6/6/2014",
          "BF": "26.2",
          "WA": "17",
          "TR": "9.8",
          "HI": "6.8"
        },
        {
          "FirstName": "Melanie",
          "LastName": "Derosa",
          "Date": "7/30/2014",
          "BF": "32.5",
          "WA": "28.9",
          "TR": "12.5",
          "HI": "11.4"
        },
        {
          "FirstName": "Jonathan",
          "LastName": "Tenney",
          "Date": "2/14/2014",
          "BF": "12.4",
          "TH": "6.3",
          "CH": "7.1",
          "WA": "5.6"
        },
        {
          "FirstName": "Lisa",
          "LastName": "Tenerowicz",
          "Date": "1/4/2014",
          "BF": "28.4",
          "WA": "13.5",
          "TR": "12",
          "HI": "11.4"
        },
        {
          "FirstName": "Laura",
          "LastName": "Pritchard",
          "Date": "3/20/2014",
          "BF": "33",
          "WA": "18",
          "TR": "18",
          "HI": "13.4"
        },
        {
          "FirstName": "Gabe",
          "LastName": "Swanger",
          "Date": "7/23/2014",
          "BF": "13.8",
          "TH": "6.8",
          "CH": "3.5",
          "WA": "11.5"
        },
        {
          "FirstName": "Nicole",
          "LastName": "Penchansky",
          "Date": "6/25/2014",
          "BF": "33.2",
          "WA": "22.3",
          "TR": "12.9",
          "HI": "15.8"
        },
        {
          "FirstName": "Jen",
          "LastName": "Leslie",
          "Date": "8/6/2014",
          "BF": "35.3",
          "WA": "30",
          "TR": "13.3",
          "HI": "18.7"
        },
        {
          "FirstName": "Kyla",
          "LastName": "Slen",
          "Date": "8/11/2014",
          "BF": "29.1",
          "WA": "22.8",
          "TR": "7.7",
          "HI": "11.5"
        },
        {
          "FirstName": "Irichiya",
          "LastName": "Robert",
          "Date": "1/8/2014",
          "BF": "38.1",
          "WA": "55.9",
          "TR": "21.2",
          "HI": "14.2"
        },
        {
          "FirstName": "Jillian",
          "LastName": "Day",
          "Date": "4/24/2014",
          "BF": "26.3",
          "WA": "12.4",
          "TR": "8.4",
          "HI": "12.3"
        },
        {
          "FirstName": "Theresa",
          "LastName": "Kelly",
          "Date": "6/13/2014",
          "BF": "34.9",
          "WA": "29.3",
          "TR": "15.7",
          "HI": "14.1"
        },
        {
          "FirstName": "colleen",
          "LastName": "travers",
          "Date": "9/6/2014",
          "BF": "34.3",
          "WA": "21.9",
          "TR": "20",
          "HI": "13.3"
        },
        {
          "FirstName": "alexandra",
          "LastName": "curran",
          "Date": "1/10/2014",
          "BF": "31.6",
          "WA": "19.1",
          "TR": "13.5",
          "HI": "12.7"
        },
        {
          "FirstName": "Jennifer",
          "LastName": "Lynch",
          "Date": "1/11/2014",
          "BF": "37.6",
          "WA": "42.7",
          "TR": "23.7",
          "HI": "13.8"
        },
        {
          "FirstName": "Mike",
          "LastName": "Lynch",
          "Date": "1/11/2014",
          "BF": "20.1",
          "TH": "6.3",
          "CH": "7.7",
          "WA": "21.6"
        },
        {
          "FirstName": "Tim",
          "LastName": "Salerno",
          "Date": "1/11/2014",
          "BF": "10.9",
          "TH": "7",
          "CH": "4.6",
          "WA": "7.9"
        },
        {
          "FirstName": "Katie",
          "LastName": "Lee",
          "Date": "1/11/2014",
          "BF": "35.8",
          "WA": "26.5",
          "TR": "13.2",
          "HI": "24.7"
        },
        {
          "FirstName": "Larisa",
          "LastName": "Collins",
          "Date": "9/9/2014",
          "BF": "29.6",
          "WA": "17.2",
          "TR": "11.2",
          "HI": "11.9"
        },
        {
          "FirstName": "Elle",
          "LastName": "Callahan",
          "Date": "1/11/2014",
          "BF": "25",
          "WA": "9.3",
          "TR": "13.5",
          "HI": "7.8"
        },
        {
          "FirstName": "Kate",
          "LastName": "Shafir",
          "Date": "1/13/2014",
          "BF": "30.7",
          "WA": "21.7",
          "TR": "14",
          "HI": "9.2"
        },
        {
          "FirstName": "Sonia",
          "LastName": "Singh",
          "Date": "1/14/2014",
          "BF": "35.5",
          "WA": "29.4",
          "TR": "20.1",
          "HI": "13.2"
        },
        {
          "FirstName": "Kristan",
          "LastName": "Meetze",
          "Date": "7/13/2014",
          "BF": "23.1",
          "WA": "7.2",
          "TR": "12.6",
          "HI": "7.7"
        },
        {
          "FirstName": "Yara",
          "LastName": "Vergucht",
          "Date": "1/15/2014",
          "BF": "37.6",
          "WA": "31.7",
          "TR": "18.2",
          "HI": "23.6"
        },
        {
          "FirstName": "TImothy",
          "LastName": "Dooher",
          "Date": "1/16/2014",
          "BF": "21.6",
          "TH": "8.8",
          "CH": "8.3",
          "WA": "24.4"
        },
        {
          "FirstName": "Kate",
          "LastName": "Zuraw",
          "Date": "1/16/2014",
          "BF": "35.8",
          "WA": "27.4",
          "TR": "27.6",
          "HI": "11.7"
        },
        {
          "FirstName": "AJ",
          "LastName": "Baptiste",
          "Date": "1/16/2014",
          "BF": "14.3",
          "TH": "9.8",
          "CH": "3.6",
          "WA": "10.6"
        },
        {
          "FirstName": "Nick",
          "LastName": "Lynch",
          "Date": "5/28/2014",
          "BF": "17.1",
          "TH": "6",
          "CH": "3",
          "WA": "27.3"
        },
        {
          "FirstName": "Paul",
          "LastName": "DiPrizio",
          "Date": "1/20/2014",
          "BF": "21.9",
          "TH": "8.5",
          "CH": "7.9",
          "WA": "23.8"
        },
        {
          "FirstName": "Maggie",
          "LastName": "Daily",
          "Date": "4/8/2014",
          "BF": "26.3",
          "WA": "12.6",
          "TR": "11.6",
          "HI": "8.8"
        },
        {
          "FirstName": "Jossie",
          "LastName": "Campos",
          "Date": "1/29/2014",
          "BF": "25.3",
          "WA": "17.9",
          "TR": "6.7",
          "HI": "7.8"
        },
        {
          "FirstName": "sarah",
          "LastName": "nichols",
          "Date": "6/7/2014",
          "BF": "28.7",
          "WA": "30.1",
          "TR": "4.8",
          "HI": "10.7"
        },
        {
          "FirstName": "lisa",
          "LastName": "cantagallo",
          "Date": "4/23/2014",
          "BF": "27.4",
          "WA": "11.9",
          "TR": "12.4",
          "HI": "10.8"
        },
        {
          "FirstName": "Evelyn",
          "LastName": "Dongo",
          "Date": "2/11/2014",
          "BF": "34",
          "WA": "31.8",
          "TR": "11.8",
          "HI": "14.5"
        },
        {
          "FirstName": "Alison",
          "LastName": "O'Brien",
          "Date": "2/12/2014",
          "BF": "37.3",
          "WA": "39.6",
          "TR": "15.9",
          "HI": "19.4"
        },
        {
          "FirstName": "Tom",
          "LastName": "Ambrogio",
          "Date": "2/12/2014",
          "BF": "16.5",
          "TH": "6.5",
          "CH": "5.4",
          "WA": "17.6"
        },
        {
          "FirstName": "Jason",
          "LastName": "Lomba",
          "Date": "3/28/2014",
          "BF": "30.9",
          "TH": "10.6",
          "CH": "16.8",
          "WA": "57.1"
        },
        {
          "FirstName": "abbas",
          "LastName": "mooraj",
          "Date": "2/19/2014",
          "BF": "19.5",
          "TH": "8.6",
          "CH": "10.9",
          "WA": "12.7"
        },
        {
          "FirstName": "Liz",
          "LastName": "Rider",
          "Date": "7/23/2014",
          "BF": "35.6",
          "WA": "28.8",
          "TR": "23.5",
          "HI": "12.3"
        },
        {
          "FirstName": "Curtis",
          "LastName": "Townsend",
          "Date": "8/30/2014",
          "BF": "19.8",
          "TH": "7.7",
          "CH": "6.1",
          "WA": "22.1"
        },
        {
          "FirstName": "Shakti",
          "LastName": "Rovner",
          "Date": "2/25/2014",
          "BF": "39.5",
          "WA": "51.5",
          "TR": "21.3",
          "HI": "24.1"
        },
        {
          "FirstName": "Julie",
          "LastName": "Centeno",
          "Date": "3/12/2014",
          "BF": "36.2",
          "WA": "58",
          "TR": "12.8",
          "HI": "13.5"
        },
        {
          "FirstName": "Danielle",
          "LastName": "Washington",
          "Date": "3/12/2014",
          "BF": "37.3",
          "WA": "32",
          "TR": "13.4",
          "HI": "30"
        },
        {
          "FirstName": "Sophia",
          "LastName": "Miller",
          "Date": "5/5/2014",
          "BF": "28.7",
          "WA": "11.6",
          "TR": "17.7",
          "HI": "9.4"
        },
        {
          "FirstName": "Scott",
          "LastName": "Giacalone",
          "Date": "7/30/2014",
          "BF": "12.9",
          "TH": "5.5",
          "CH": "6.9",
          "WA": "9.5"
        },
        {
          "FirstName": "Lawanda",
          "LastName": "Stackhouse",
          "Date": "3/19/2014",
          "BF": "38.7",
          "WA": "54.9",
          "TR": "19.3",
          "HI": "18.7"
        },
        {
          "FirstName": "Deana",
          "LastName": "Lozano",
          "Date": "3/21/2014",
          "BF": "29.3",
          "WA": "23.5",
          "TR": "13.9",
          "HI": "5.5"
        },
        {
          "FirstName": "Monique",
          "LastName": "Jeffrey",
          "Date": "3/24/2014",
          "BF": "33.2",
          "WA": "25.1",
          "TR": "14.8",
          "HI": "12.3"
        },
        {
          "FirstName": "mary",
          "LastName": "gleason",
          "Date": "3/29/2014",
          "BF": "37.5",
          "WA": "38.8",
          "TR": "16.3",
          "HI": "20.6"
        },
        {
          "FirstName": "Joshi",
          "LastName": "Radin",
          "Date": "4/2/2014",
          "BF": "26.9",
          "WA": "17.2",
          "TR": "8.7",
          "HI": "9.1"
        },
        {
          "FirstName": "Olga",
          "LastName": "Bolkunova",
          "Date": "6/10/2014",
          "BF": "35.5",
          "WA": "33.7",
          "TR": "13.1",
          "HI": "17.6"
        },
        {
          "FirstName": "diana",
          "LastName": "cepeda",
          "Date": "4/7/2014",
          "BF": "29.7",
          "WA": "12.7",
          "TR": "10.4",
          "HI": "17.6"
        },
        {
          "FirstName": "Kristen",
          "LastName": "Hurov",
          "Date": "7/8/2014",
          "BF": "23.5",
          "WA": "8.3",
          "TR": "13",
          "HI": "6.7"
        },
        {
          "FirstName": "Diana",
          "LastName": "Graham",
          "Date": "4/15/2014",
          "BF": "30.2",
          "WA": "22.4",
          "TR": "11",
          "HI": "10.7"
        },
        {
          "FirstName": "Anna",
          "LastName": "Cottrell",
          "Date": "4/22/2014",
          "BF": "30.3",
          "WA": "21",
          "TR": "12",
          "HI": "10.6"
        },
        {
          "FirstName": "Chris",
          "LastName": "Tierney",
          "Date": "4/23/2014",
          "BF": "20.6",
          "TH": "9.1",
          "CH": "11.8",
          "WA": "12.3"
        },
        {
          "FirstName": "Sarah",
          "LastName": "Gean",
          "Date": "8/16/2014",
          "BF": "33.6",
          "WA": "26.5",
          "TR": "17.6",
          "HI": "10.8"
        },
        {
          "FirstName": "Amy",
          "LastName": "Dufor",
          "Date": "5/29/2014",
          "BF": "31.9",
          "WA": "28",
          "TR": "10.2",
          "HI": "12.7"
        },
        {
          "FirstName": "Amy",
          "LastName": "Wilson",
          "Date": "5/29/2014",
          "BF": "30.9",
          "WA": "30.5",
          "TR": "9.4",
          "HI": "10.4"
        },
        {
          "FirstName": "Stephanie",
          "LastName": "Forzese",
          "Date": "5/30/2014",
          "BF": "28.6",
          "WA": "15.9",
          "TR": "12.1",
          "HI": "9.7"
        },
        {
          "FirstName": "Casey",
          "LastName": "Grange"
        },
        {
          "FirstName": "Casey",
          "LastName": "Grange",
          "Date": "5/30/2014",
          "BF": "31.2",
          "WA": "26.9",
          "TR": "9.5",
          "HI": "12.5"
        },
        {
          "FirstName": "Mallary",
          "LastName": "Forzese",
          "Date": "5/24/2014",
          "BF": "31",
          "WA": "22",
          "TR": "15.8",
          "HI": "8"
        },
        {
          "FirstName": "Zibby",
          "LastName": "McCleary",
          "Date": "5/30/2014",
          "BF": "26.9",
          "WA": "15.4",
          "TR": "10",
          "HI": "8.8"
        },
        {
          "FirstName": "Anna",
          "LastName": "Brown",
          "Date": "5/30/2014",
          "BF": "35.9",
          "WA": "40.1",
          "TR": "15.3",
          "HI": "13.7"
        },
        {
          "FirstName": "Sara",
          "LastName": "Vinneau",
          "Date": "5/27/2014",
          "BF": "33.3",
          "WA": "22",
          "TR": "19.5",
          "HI": "11.2"
        },
        {
          "FirstName": "Muslimah",
          "LastName": "Habeel",
          "Date": "5/30/2014",
          "BF": "26.7",
          "WA": "21.8",
          "TR": "8.2",
          "HI": "6.9"
        },
        {
          "FirstName": "Alana",
          "LastName": "Breen",
          "Date": "4/30/2014",
          "BF": "31.8",
          "WA": "28.5",
          "TR": "8.6",
          "HI": "13.9"
        },
        {
          "FirstName": "Nikki",
          "LastName": "Hill",
          "Date": "7/24/2014",
          "BF": "30.6",
          "WA": "29.8",
          "TR": "11.5",
          "HI": "7.9"
        },
        {
          "FirstName": "Christyane",
          "LastName": "Coelho",
          "Date": "4/30/2014",
          "BF": "35.5",
          "WA": "31.2",
          "TR": "15.1",
          "HI": "15.3"
        },
        {
          "FirstName": "Missy",
          "LastName": "Zappulla"
        },
        {
          "FirstName": "Missy",
          "LastName": "Zappulla",
          "Date": "4/30/2014",
          "BF": "36.6",
          "WA": "38",
          "TR": "20.9",
          "HI": "13.4"
        },
        {
          "FirstName": "Jessica",
          "LastName": "Collier",
          "Date": "8/22/2014",
          "BF": "31.2",
          "WA": "24",
          "TR": "9.6",
          "HI": "13.6"
        },
        {
          "FirstName": "Farah",
          "LastName": "Benoit",
          "Date": "4/30/2014",
          "BF": "39",
          "WA": "53.5",
          "TR": "24.9",
          "HI": "16.4"
        },
        {
          "FirstName": "Jenny",
          "LastName": "Cheng",
          "Date": "5/1/2014",
          "BF": "29.9",
          "WA": "23.6",
          "TR": "9.4",
          "HI": "11.1"
        },
        {
          "FirstName": "Stephanie",
          "LastName": "Tortora",
          "Date": "7/17/2014",
          "BF": "33.7",
          "WA": "18.2",
          "TR": "12.8",
          "HI": "21.4"
        },
        {
          "FirstName": "Jodleen",
          "LastName": "Doricent",
          "Date": "7/28/2014",
          "BF": "35.3",
          "WA": "23.8",
          "TR": "17.6",
          "HI": "17.4"
        },
        {
          "FirstName": "Crystal",
          "LastName": "Greaves",
          "Date": "5/6/2014",
          "BF": "39.2",
          "WA": "46.4",
          "TR": "24.6",
          "HI": "20.9"
        },
        {
          "FirstName": "Daniel",
          "LastName": "Malacarne",
          "Date": "5/30/2014",
          "BF": "19.9",
          "TH": "9.6",
          "CH": "7.8",
          "WA": "16.7"
        },
        {
          "FirstName": "Jennifer",
          "LastName": "Glanville",
          "Date": "5/8/2014",
          "BF": "36.7",
          "WA": "41.3",
          "TR": "12.8",
          "HI": "20.2"
        },
        {
          "FirstName": "Endris",
          "LastName": "Kerga",
          "Date": "5/8/2014",
          "BF": "18.7",
          "TH": "8.3",
          "CH": "7.7",
          "WA": "15.7"
        },
        {
          "FirstName": "Samantha",
          "LastName": "Killilea",
          "Date": "7/7/2014",
          "BF": "33",
          "WA": "22.3",
          "TR": "11.1",
          "HI": "17.9"
        },
        {
          "FirstName": "Luci",
          "LastName": "Decarli",
          "Date": "6/11/2014",
          "BF": "32.7",
          "WA": "32.4",
          "TR": "10.3",
          "HI": "12.7"
        },
        {
          "FirstName": "Ashley",
          "LastName": "Soroka",
          "Date": "6/12/2014",
          "BF": "36.9",
          "WA": "45.2",
          "TR": "11.5",
          "HI": "22.9"
        },
        {
          "FirstName": "Amy",
          "LastName": "Rancourt",
          "Date": "8/30/2014",
          "BF": "34.6",
          "WA": "15",
          "TR": "21.7",
          "HI": "17.8"
        },
        {
          "FirstName": "Nicole",
          "LastName": "Galante",
          "Date": "5/28/2014",
          "BF": "34.4",
          "WA": "29.9",
          "TR": "16",
          "HI": "12.3"
        },
        {
          "FirstName": "Tina",
          "LastName": "Rosado",
          "Date": "5/28/2014",
          "BF": "35.9",
          "WA": "39.1",
          "TR": "17.5",
          "HI": "12.5"
        },
        {
          "FirstName": "Jessie",
          "LastName": "Lupardus",
          "Date": "7/14/2014",
          "BF": "31",
          "WA": "18.7",
          "TR": "7.2",
          "HI": "20.3"
        },
        {
          "FirstName": "Aughtney",
          "LastName": "Lovaincy",
          "Date": "6/2/2014",
          "BF": "33.1",
          "WA": "31.1",
          "TR": "8.3",
          "HI": "16.8"
        },
        {
          "FirstName": "Amelia",
          "LastName": "Joselow"
        },
        {
          "FirstName": "Amelia",
          "LastName": "Joselow",
          "Date": "6/7/2014",
          "BF": "34",
          "WA": "31.7",
          "TR": "12.6",
          "HI": "14.1"
        },
        {
          "FirstName": "alexis",
          "LastName": "freedberg",
          "Date": "9/6/2014",
          "BF": "31.5",
          "WA": "18.6",
          "TR": "14.1",
          "HI": "12.1"
        },
        {
          "FirstName": "Amie ",
          "LastName": "Pomerleau",
          "Date": "6/11/2014",
          "BF": "34.1",
          "WA": "37.1",
          "TR": "11.4",
          "HI": "13.6"
        },
        {
          "FirstName": "Julia",
          "LastName": "Stewart",
          "Date": "6/11/2014",
          "BF": "32.8",
          "WA": "17.8",
          "TR": "12.8",
          "HI": "17.9"
        },
        {
          "FirstName": "Shibani",
          "LastName": "Peterson",
          "Date": "6/11/2014",
          "BF": "33.8",
          "WA": "24.9",
          "TR": "13.1",
          "HI": "15.7"
        },
        {
          "FirstName": "Natasha",
          "LastName": "Stevenson",
          "Date": "6/11/2014",
          "BF": "30.5",
          "WA": "29.5",
          "TR": "10.7",
          "HI": "8.6"
        },
        {
          "FirstName": "Kate",
          "LastName": "Walsh",
          "Date": "8/6/2014",
          "BF": "32.1",
          "WA": "22.4",
          "TR": "15.9",
          "HI": "10.2"
        },
        {
          "FirstName": "Julio",
          "LastName": "De La Cruz",
          "Date": "6/12/2014",
          "BF": "25.2",
          "TH": "7.7",
          "CH": "15.4",
          "WA": "21.1"
        },
        {
          "FirstName": "Greg",
          "LastName": "Fletcher",
          "Date": "6/17/2014",
          "BF": "14.9",
          "TH": "6.6",
          "CH": "7.8",
          "WA": "9.3"
        },
        {
          "FirstName": "Danielle",
          "LastName": "Seeley",
          "Date": "7/22/2014",
          "BF": "36.2",
          "WA": "28.2",
          "TR": "19.1",
          "HI": "16.5"
        },
        {
          "FirstName": "Rachael",
          "LastName": "Miller",
          "Date": "6/19/2014",
          "BF": "25.5",
          "WA": "10",
          "TR": "12.4",
          "HI": "9.3"
        },
        {
          "FirstName": "Marisa",
          "LastName": "Remick",
          "Date": "6/21/2014",
          "BF": "32.5",
          "WA": "24.5",
          "TR": "14.2",
          "HI": "11.6"
        },
        {
          "FirstName": "Dan",
          "LastName": "Callahan",
          "Date": "8/15/2014",
          "BF": "17.1",
          "TH": "5.1",
          "CH": "6.9",
          "WA": "17.6"
        },
        {
          "FirstName": "Courtney",
          "LastName": "Wrin",
          "Date": "8/6/2014",
          "BF": "25.1",
          "WA": "12.1",
          "TR": "8.6",
          "HI": "10.3"
        },
        {
          "FirstName": "Mike",
          "LastName": "Henson",
          "Date": "6/25/2014",
          "BF": "27.1",
          "TH": "10.7",
          "CH": "11.7",
          "WA": "29.8"
        },
        {
          "FirstName": "Katie",
          "LastName": "Gillespie",
          "Date": "6/26/2014",
          "BF": "39.5",
          "WA": "56.3",
          "TR": "19.9",
          "HI": "24.4"
        },
        {
          "FirstName": "Kenny",
          "LastName": "Rodriquez",
          "Date": "7/2/2014",
          "BF": "28.8",
          "TH": "14.9",
          "CH": "21.7",
          "WA": "20.2"
        },
        {
          "FirstName": "Dharmesh",
          "LastName": "Patel",
          "Date": "7/8/2014",
          "BF": "26",
          "TH": "7.9",
          "CH": "17.8",
          "WA": "21.5"
        },
        {
          "FirstName": "Katie",
          "LastName": "Lee",
          "Date": "7/10/2014",
          "BF": "30.9",
          "WA": "35.9",
          "TR": "16",
          "HI": "2.3"
        },
        {
          "FirstName": "Sarah",
          "LastName": "Wheeldon",
          "Date": "8/13/2014",
          "BF": "21.9",
          "WA": "10.3",
          "TR": "9.2",
          "HI": "6"
        },
        {
          "FirstName": "Celeste",
          "LastName": "Reyes",
          "Date": "7/21/2014",
          "BF": "37.9",
          "WA": "46.8",
          "TR": "18",
          "HI": "18"
        },
        {
          "FirstName": "Irma",
          "LastName": "Reyes",
          "Date": "7/21/2014",
          "BF": "32.5",
          "WA": "26.9",
          "TR": "17.9",
          "HI": "8.1"
        },
        {
          "FirstName": "Margarida",
          "LastName": "Lima",
          "Date": "7/23/2014",
          "BF": "36.4",
          "WA": "38.3",
          "TR": "18.8",
          "HI": "13.6"
        },
        {
          "FirstName": "Kristen",
          "LastName": "Everett",
          "Date": "8/28/2014",
          "BF": "37.8",
          "WA": "42.2",
          "TR": "18.2",
          "HI": "19.2"
        },
        {
          "FirstName": "Ashley",
          "LastName": "West",
          "Date": "7/28/2014",
          "BF": "34",
          "WA": "25.6",
          "TR": "15.4",
          "HI": "13.5"
        },
        {
          "FirstName": "Hannah",
          "LastName": "Reff",
          "Date": "9/6/2014",
          "BF": "36.1",
          "WA": "39.8",
          "TR": "19.1",
          "HI": "12.3"
        },
        {
          "FirstName": "Cecilia",
          "LastName": "Cotta",
          "Date": "8/5/2014",
          "BF": "25.9",
          "WA": "17.9",
          "TR": "8.5",
          "HI": "7.1"
        },
        {
          "FirstName": "Troy",
          "LastName": "Wilson",
          "Date": "8/5/2014",
          "BF": "21",
          "TH": "8.5",
          "CH": "11.5",
          "WA": "13.7"
        },
        {
          "FirstName": "Drew",
          "LastName": "Busa",
          "Date": "8/7/2014",
          "BF": "17.7",
          "TH": "7.3",
          "CH": "6.6",
          "WA": "14.9"
        },
        {
          "FirstName": "Alee",
          "LastName": "Rogers",
          "Date": "8/13/2014",
          "BF": "36.9",
          "WA": "56.4",
          "TR": "11.2",
          "HI": "18.6"
        },
        {
          "FirstName": "Bill",
          "LastName": "Durbrow",
          "Date": "8/15/2014",
          "BF": "10.6",
          "TH": "6.2",
          "CH": "3.5",
          "WA": "7.7"
        },
        {
          "FirstName": "James",
          "LastName": "Squires",
          "Date": "8/15/2014",
          "BF": "16.8",
          "TH": "6",
          "CH": "5.8",
          "WA": "17.9"
        },
        {
          "FirstName": "Mat",
          "LastName": "Scheller",
          "Date": "8/22/2014",
          "BF": "19",
          "TH": "9.6",
          "CH": "7.9",
          "WA": "13.1"
        },
        {
          "FirstName": "Bob",
          "LastName": "Emerson",
          "Date": "8/27/2014",
          "BF": "25.5",
          "TH": "7.5",
          "CH": "14.2",
          "WA": "20.4"
        },
        {
          "FirstName": "Melinda",
          "LastName": "Veress",
          "Date": "9/3/2014",
          "BF": "34.9",
          "WA": "24.2",
          "TR": "14.2",
          "HI": "19.2"
        },
        {
          "FirstName": "Kelly",
          "LastName": "Kellar",
          "Date": "9/3/2014",
          "BF": "34.6",
          "WA": "37.8",
          "TR": "15.1",
          "HI": "10.9"
        },
        {
          "FirstName": "Michelle",
          "LastName": "Simao",
          "Date": "9/3/2014",
          "BF": "31.5",
          "WA": "28.9",
          "TR": "13.4",
          "HI": "8.4"
        },
        {
          "FirstName": "Danielle",
          "LastName": "Machado",
          "Date": "9/3/2014",
          "BF": "23.3",
          "WA": "11.3",
          "TR": "10.5",
          "HI": "5.9"
        },
        {
          "FirstName": "Jaclyn",
          "LastName": "Daniels",
          "Date": "9/4/2014",
          "BF": "29.1",
          "WA": "20.3",
          "TR": "12.9",
          "HI": "7.5"
        },
        {
          "FirstName": "Jenni",
          "LastName": "Schultz",
          "Date": "9/4/2014",
          "BF": "38.4",
          "WA": "48.3",
          "TR": "20.5",
          "HI": "17.8"
        },
        {
          "FirstName": "Ritika",
          "LastName": "trehan",
          "Date": "9/4/2014",
          "BF": "37.9",
          "WA": "37.2",
          "TR": "20.9",
          "HI": "19.7"
        }
      ]
    }
  };
  var ClientResults = newResults.newDataSet.Table;

  return ClientResults;

});

app.controller('MeasurementsCtrl', function ($scope, ClientResults, Measurement) {
    $scope.clientResults = ClientResults;


    $scope.chartBodyFatGauge = {
      data: {
        columns: [
          ['body fat', 21.4]
        ],
        type: 'gauge',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
          values: [13, 20, 24, 31]
        }
      },
      size: {
        height: 180
      }
    };

    $scope.chartBodyFatSpline = {
      data: {
        x: 'x',
        columns: [
          ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
          ['body fat', 30, 200, 100, 400, 150, 250]
        ]
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d'
          }
        }
      }
    };

    $scope.fakeMeasurement = {
      "FirstName": "Callie",
      "LastName": "Durbrow",
      "Date": "3/2/2014",
      "BF": "27.6",
      "WA": "14.3",
      "TR": "11.8",
      "HI": "9.3"
    };

    $scope.measurements = Measurement.all;

    $scope.measurement = {firstName: 'Test', lastName: 'Surname', bodyFat: 27.6, waist: 14.3, tricep: 11.9};

    $scope.postFakeMeasurement = function () {
      console.log('postFakeMeasurement called');
      Measurement.create($scope.measurement);

    };

});

app.controller('UploadController', function($scope) {
  $scope.upload = function(evt) {

    var file = evt.target.files();
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      // Great success! All the File APIs are supported.
      console.log("Great success! All File API's supported.");

      var file = evt.target.files();
      console.log(file);
    } else {
      alert('The File APIs are not fully supported in this browser.');
    }
  }
});
