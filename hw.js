const products = [
    { name: "Pipes", material: "Alley Stad", grade: "(6)" },
    { name: "Pipes", material: "Aluminum F22 Pins", grade: "(6)" },
    { name: "Pipes", material: "Tubing", grade: "(6)" },
    { name: "Pipes", material: "Fique Firrings", grade: "(6)" },
    { name: "Pipes", material: "apper Nickel", grade: "(6)" },
    { name: "Pipes", material: "A Pres", grade: "(6)" },
    { name: "Pipes", material: "Forget Fittings", grade: "(6)" },
    { name: "Pipes", material: "Henges", grade: "(6)" },
    { name: "Pipes", material: "Dustles Seve", grade: "(6)" },
    { name: "Pipes", material: "Mali", grade: "(6)" },
    { name: "Pipes", material: "Instrumentationinge", grade: "(6)" },
    { name: "Pipes", material: "Sheet & Pa", grade: "(6)" },
    { name: "Pipes", material: "Love Temporate Car", grade: "(6)" },
    { name: "Pipes", material: "Bars", grade: "(6)" },
    { name: "Pipes", material: "Menu", grade: "(6)" },
    { name: "Pipes", material: "fitainless Steel", grade: "(6)" },
    { name: "Pipes", material: "Trankum", grade: "(6)" },
    { name: "Alley Stad", material: "Pipes", grade: "(6)" },
    { name: "Alley Stad", material: "Aluminum F22 Pins", grade: "(6)" },
    { name: "Alley Stad", material: "Tubing", grade: "(6)" },
    { name: "Alley Stad", material: "Fique Firrings", grade: "(6)" },
    { name: "Alley Stad", material: "apper Nickel", grade: "(6)" },
    { name: "Alley Stad", material: "A Pres", grade: "(6)" },
    { name: "Alley Stad", material: "Forget Fittings", grade: "(6)" },
    { name: "Alley Stad", material: "Henges", grade: "(6)" },
    { name: "Alley Stad", material: "Dustles Seve", grade: "(6)" },
    { name: "Alley Stad", material: "Mali", grade: "(6)" },
    { name: "Alley Stad", material: "Instrumentationinge", grade: "(6)" },
    { name: "Alley Stad", material: "Sheet & Pa", grade: "(6)" },
    { name: "Alley Stad", material: "Love Temporate Car", grade: "(6)" },
    { name: "Alley Stad", material: "Bars", grade: "(6)" },
    { name: "Alley Stad", material: "Menu", grade: "(6)" },
    { name: "Alley Stad", material: "fitainless Steel", grade: "(6)" },
    { name: "Alley Stad", material: "Trankum", grade: "(6)" },
    { name: "Aluminum F22 Pins", material: "Pipes", grade: "(6)" },
    { name: "Aluminum F22 Pins", material: "Alley Stad", grade: "(6)" },
    { name: "Aluminum F22 Pins", material: "Tubing", grade: "(6)" },
    { name: "Aluminum F22 Pins", material: "Fique Firrings", grade: "(6)" },
    { name: "Aluminum F22 Pins", material: "apper Nickel", grade: "(6)" },
    { name: "Aluminum F22 Pins", material: "A Pres", grade: "(6)" },
    { name: "Aluminum F22 Pins", material: "Forget Fittings", grade: "(6)" },
    { name: "Aluminum F22 Pins", material: "Henges", grade: "(6)" },
    { name: "Aluminum F22 Pins", material: "Dustles Seve", grade: "(6)" },
    { name: "Aluminum F22 Pins", material: "Mali", grade: "(6)" },
    { name: "Aluminum F22 Pins", material: "Instrumentationinge", grade: "(6)" },
    { name: "Aluminum F22 Pins", material: "Sheet & Pa", grade: "(6)" },
    { name: "Aluminum F22 Pins", material: "Love Temporate Car", grade: "(6)" },
    { name: "Aluminum F22 Pins", material: "Bars", grade: "(6)" },
    { name: "Aluminum F22 Pins", material: "Menu", grade: "(6)" },
    { name: "Aluminum F22 Pins", material: "fitainless Steel", grade: "(6)" },
    { name: "Aluminum F22 Pins", material: "Trankum", grade: "(6)" },
    { name: "Tubing", material: "Pipes", grade: "(6)" },
    { name: "Tubing", material: "Alley Stad", grade: "(6)" },
    { name: "Tubing", material: "Aluminum F22 Pins", grade: "(6)" },
    { name: "Tubing", material: "Fique Firrings", grade: "(6)" },
    { name: "Tubing", material: "apper Nickel", grade: "(6)" },
    { name: "Tubing", material: "A Pres", grade: "(6)" },
    { name: "Tubing", material: "Forget Fittings", grade: "(6)" },
    { name: "Tubing", material: "Henges", grade: "(6)" },
    { name: "Tubing", material: "Dustles Seve", grade: "(6)" },
    { name: "Tubing", material: "Mali", grade: "(6)" },
    { name: "Tubing", material: "Instrumentationinge", grade: "(6)" },
    { name: "Tubing", material: "Sheet & Pa", grade: "(6)" },
    { name: "Tubing", material: "Love Temporate Car", grade: "(6)" },
    { name: "Tubing", material: "Bars", grade: "(6)" },
    { name: "Tubing", material: "Menu", grade: "(6)" },
    { name: "Tubing", material: "fitainless Steel", grade: "(6)" },
    { name: "Tubing", material: "Trankum", grade: "(6)" },
    { name: 'Pipes', material: 'Alley Stad', grade: '(6)' } ,
    { name: 'Pipes', material: 'Aluminum F22 Pins', grade: '(6)' } ,  
    { name: 'Pipes', material: 'Tubing', grade: '(6)' } ,
    { name: 'Pipes', material: 'Fique Firrings', grade: '(6)' } ,     
    { name: 'Pipes', material: 'apper Nickel', grade: '(6)' } ,       
    { name: 'Pipes', material: 'A Pres', grade: '(6)' } ,
    { name: 'Pipes', material: 'Forget Fittings', grade: '(6)' } ,    
    { name: 'Pipes', material: 'Henges', grade: '(6)' } ,
    { name: 'Pipes', material: 'Dustles Seve', grade: '(6)' } ,       
    { name: 'Pipes', material: 'Mali', grade: '(6)' } ,
    { name: 'Pipes', material: 'Instrumentationinge', grade: '(6)' } ,
    { name: 'Pipes', material: 'Sheet & Pa', grade: '(6)' } ,
    { name: 'Pipes', material: 'Love Temporate Car', grade: '(6)' } , 
    { name: 'Pipes', material: 'Bars', grade: '(6)' } ,
    { name: 'Pipes', material: 'Menu', grade: '(6)' } ,
    { name: 'Pipes', material: 'fitainless Steel', grade: '(6)' } ,
    { name: 'Pipes', material: 'Trankum', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Pipes', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Aluminum F22 Pins', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Tubing', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'A Pres', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Forget Fittings', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Henges', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Mali', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Instrumentationinge', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Sheet & Pa', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Love Temporate Car', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Bars', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Menu', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'fitainless Steel', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Trankum', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Pipes', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Alley Stad', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Tubing', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'A Pres', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'Forget Fittings',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Henges', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Mali', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'Instrumentationinge',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Sheet & Pa', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'Love Temporate Car',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Bars', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Menu', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'fitainless Steel',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Trankum', grade: '(6)' } ,
    { name: 'Tubing', material: 'Pipes', grade: '(6)' } ,
    { name: 'Tubing', material: 'Alley Stad', grade: '(6)' } ,
    { name: 'Tubing', material: 'Aluminum F22 Pins', grade: '(6)' } ,
    { name: 'Tubing', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Tubing', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Tubing', material: 'A Pres', grade: '(6)' } ,
    { name: 'Tubing', material: 'Forget Fittings', grade: '(6)' } ,
    { name: 'Tubing', material: 'Henges', grade: '(6)' } ,
    { name: 'Tubing', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Tubing', material: 'Mali', grade: '(6)' } ,
    { name: 'Tubing', material: 'Instrumentationinge', grade: '(6)' } ,
    { name: 'Tubing', material: 'Sheet & Pa', grade: '(6)' } ,
    { name: 'Tubing', material: 'Love Temporate Car', grade: '(6)' } ,
    { name: 'Tubing', material: 'Bars', grade: '(6)' } ,
    { name: 'Tubing', material: 'Menu', grade: '(6)' } ,
    { name: 'Tubing', material: 'fitainless Steel', grade: '(6)' } ,
    { name: 'Tubing', material: 'Trankum', grade: '(6)' } ,
    { name: 'Pipes', material: 'Alley Stad', grade: '(6)' } ,
    { name: 'Pipes', material: 'Aluminum F22 Pins', grade: '(6)' } ,
    { name: 'Pipes', material: 'Tubing', grade: '(6)' } ,
    { name: 'Pipes', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Pipes', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Pipes', material: 'A Pres', grade: '(6)' } ,
    { name: 'Pipes', material: 'Forget Fittings', grade: '(6)' } ,
    { name: 'Pipes', material: 'Henges', grade: '(6)' } ,
    { name: 'Pipes', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Pipes', material: 'Mali', grade: '(6)' } ,
    { name: 'Pipes', material: 'Instrumentationinge', grade: '(6)' } ,
    { name: 'Pipes', material: 'Sheet & Pa', grade: '(6)' } ,
    { name: 'Pipes', material: 'Love Temporate Car', grade: '(6)' } ,
    { name: 'Pipes', material: 'Bars', grade: '(6)' } ,
    { name: 'Pipes', material: 'Menu', grade: '(6)' } ,
    { name: 'Pipes', material: 'fitainless Steel', grade: '(6)' } ,
    { name: 'Pipes', material: 'Trankum', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Pipes', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Aluminum F22 Pins', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Tubing', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'A Pres', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Forget Fittings', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Henges', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Mali', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Instrumentationinge', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Sheet & Pa', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Love Temporate Car', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Bars', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Menu', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'fitainless Steel', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Trankum', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Pipes', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Alley Stad', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Tubing', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'A Pres', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'Forget Fittings',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Henges', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Mali', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'Instrumentationinge',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Sheet & Pa', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'Love Temporate Car',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Bars', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Menu', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'fitainless Steel',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Trankum', grade: '(6)' } ,
    { name: 'Tubing', material: 'Pipes', grade: '(6)' } ,
    { name: 'Tubing', material: 'Alley Stad', grade: '(6)' } ,
    { name: 'Tubing', material: 'Aluminum F22 Pins', grade: '(6)' } ,
    { name: 'Tubing', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Tubing', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Tubing', material: 'A Pres', grade: '(6)' } ,
    { name: 'Tubing', material: 'Forget Fittings', grade: '(6)' } ,
    { name: 'Tubing', material: 'Henges', grade: '(6)' } ,
    { name: 'Tubing', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Tubing', material: 'Mali', grade: '(6)' } ,
    { name: 'Tubing', material: 'Instrumentationinge', grade: '(6)' } ,
    { name: 'Tubing', material: 'Sheet & Pa', grade: '(6)' } ,
    { name: 'Tubing', material: 'Love Temporate Car', grade: '(6)' } ,
    { name: 'Tubing', material: 'Bars', grade: '(6)' } ,
    { name: 'Tubing', material: 'Menu', grade: '(6)' } ,
    { name: 'Tubing', material: 'fitainless Steel', grade: '(6)' } ,
    { name: 'Tubing', material: 'Trankum', grade: '(6)' } ,
    { name: 'Pipes', material: 'Alley Stad', grade: '(6)' } ,
    { name: 'Pipes', material: 'Aluminum F22 Pins', grade: '(6)' } ,
    { name: 'Pipes', material: 'Tubing', grade: '(6)' } ,
    { name: 'Pipes', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Pipes', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Pipes', material: 'A Pres', grade: '(6)' } ,
    { name: 'Pipes', material: 'Forget Fittings', grade: '(6)' } ,
    { name: 'Pipes', material: 'Henges', grade: '(6)' } ,
    { name: 'Pipes', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Pipes', material: 'Mali', grade: '(6)' } ,
    { name: 'Pipes', material: 'Instrumentationinge', grade: '(6)' } ,
    { name: 'Pipes', material: 'Sheet & Pa', grade: '(6)' } ,
    { name: 'Pipes', material: 'Love Temporate Car', grade: '(6)' } ,
    { name: 'Pipes', material: 'Bars', grade: '(6)' } ,
    { name: 'Pipes', material: 'Menu', grade: '(6)' } ,
    { name: 'Pipes', material: 'fitainless Steel', grade: '(6)' } ,
    { name: 'Pipes', material: 'Trankum', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Pipes', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Aluminum F22 Pins', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Tubing', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'A Pres', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Forget Fittings', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Henges', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Mali', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Instrumentationinge', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Sheet & Pa', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Love Temporate Car', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Bars', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Menu', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'fitainless Steel', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Trankum', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Pipes', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Alley Stad', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Tubing', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'A Pres', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'Forget Fittings',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Henges', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Mali', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'Instrumentationinge',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Sheet & Pa', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'Love Temporate Car',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Bars', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Menu', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'fitainless Steel',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Trankum', grade: '(6)' } ,
    { name: 'Tubing', material: 'Pipes', grade: '(6)' } ,
    { name: 'Tubing', material: 'Alley Stad', grade: '(6)' } ,
    { name: 'Tubing', material: 'Aluminum F22 Pins', grade: '(6)' } ,
    { name: 'Tubing', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Tubing', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Tubing', material: 'A Pres', grade: '(6)' } ,
    { name: 'Tubing', material: 'Forget Fittings', grade: '(6)' } ,
    { name: 'Tubing', material: 'Henges', grade: '(6)' } ,
    { name: 'Tubing', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Tubing', material: 'Mali', grade: '(6)' } ,
    { name: 'Tubing', material: 'Instrumentationinge', grade: '(6)' } ,
    { name: 'Tubing', material: 'Sheet & Pa', grade: '(6)' } ,
    { name: 'Tubing', material: 'Love Temporate Car', grade: '(6)' } ,
    { name: 'Tubing', material: 'Bars', grade: '(6)' } ,
    { name: 'Tubing', material: 'Menu', grade: '(6)' } ,
    { name: 'Tubing', material: 'fitainless Steel', grade: '(6)' } ,
    { name: 'Tubing', material: 'Trankum', grade: '(6)' } ,
    { name: 'Pipes', material: 'Alley Stad', grade: '(6)' } ,
    { name: 'Pipes', material: 'Aluminum F22 Pins', grade: '(6)' } ,
    { name: 'Pipes', material: 'Tubing', grade: '(6)' } ,
    { name: 'Pipes', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Pipes', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Pipes', material: 'A Pres', grade: '(6)' } ,
    { name: 'Pipes', material: 'Forget Fittings', grade: '(6)' } ,
    { name: 'Pipes', material: 'Henges', grade: '(6)' } ,
    { name: 'Pipes', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Pipes', material: 'Mali', grade: '(6)' } ,
    { name: 'Pipes', material: 'Instrumentationinge', grade: '(6)' } ,
    { name: 'Pipes', material: 'Sheet & Pa', grade: '(6)' } ,
    { name: 'Pipes', material: 'Love Temporate Car', grade: '(6)' } ,
    { name: 'Pipes', material: 'Bars', grade: '(6)' } ,
    { name: 'Pipes', material: 'Menu', grade: '(6)' } ,
    { name: 'Pipes', material: 'fitainless Steel', grade: '(6)' } ,
    { name: 'Pipes', material: 'Trankum', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Pipes', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Aluminum F22 Pins', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Tubing', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'A Pres', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Forget Fittings', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Henges', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Mali', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Instrumentationinge', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Sheet & Pa', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Love Temporate Car', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Bars', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Menu', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'fitainless Steel', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Trankum', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Pipes', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Alley Stad', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Tubing', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'A Pres', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'Forget Fittings',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Henges', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Mali', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'Instrumentationinge',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Sheet & Pa', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'Love Temporate Car',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Bars', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Menu', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'fitainless Steel',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Trankum', grade: '(6)' } ,
    { name: 'Tubing', material: 'Pipes', grade: '(6)' } ,
    { name: 'Tubing', material: 'Alley Stad', grade: '(6)' } ,
    { name: 'Tubing', material: 'Aluminum F22 Pins', grade: '(6)' } ,
    { name: 'Tubing', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Tubing', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Tubing', material: 'A Pres', grade: '(6)' } ,
    { name: 'Tubing', material: 'Forget Fittings', grade: '(6)' } ,
    { name: 'Tubing', material: 'Henges', grade: '(6)' } ,
    { name: 'Tubing', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Tubing', material: 'Mali', grade: '(6)' } ,
    { name: 'Tubing', material: 'Instrumentationinge', grade: '(6)' } ,
    { name: 'Tubing', material: 'Sheet & Pa', grade: '(6)' } ,
    { name: 'Tubing', material: 'Love Temporate Car', grade: '(6)' } ,
    { name: 'Tubing', material: 'Bars', grade: '(6)' } ,
    { name: 'Tubing', material: 'Menu', grade: '(6)' } ,
    { name: 'Tubing', material: 'fitainless Steel', grade: '(6)' } ,
    { name: 'Tubing', material: 'Trankum', grade: '(6)' } ,
    { name: 'Pipes', material: 'Alley Stad', grade: '(6)' } ,
    { name: 'Pipes', material: 'Aluminum F22 Pins', grade: '(6)' } ,
    { name: 'Pipes', material: 'Tubing', grade: '(6)' } ,
    { name: 'Pipes', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Pipes', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Pipes', material: 'A Pres', grade: '(6)' } ,
    { name: 'Pipes', material: 'Forget Fittings', grade: '(6)' } ,
    { name: 'Pipes', material: 'Henges', grade: '(6)' } ,
    { name: 'Pipes', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Pipes', material: 'Mali', grade: '(6)' } ,
    { name: 'Pipes', material: 'Instrumentationinge', grade: '(6)' } ,
    { name: 'Pipes', material: 'Sheet & Pa', grade: '(6)' } ,
    { name: 'Pipes', material: 'Love Temporate Car', grade: '(6)' } ,
    { name: 'Pipes', material: 'Bars', grade: '(6)' } ,
    { name: 'Pipes', material: 'Menu', grade: '(6)' } ,
    { name: 'Pipes', material: 'fitainless Steel', grade: '(6)' } ,
    { name: 'Pipes', material: 'Trankum', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Pipes', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Aluminum F22 Pins', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Tubing', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'A Pres', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Forget Fittings', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Henges', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Mali', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Instrumentationinge', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Sheet & Pa', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Love Temporate Car', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Bars', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Menu', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'fitainless Steel', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Trankum', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Pipes', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Alley Stad', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Tubing', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'A Pres', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'Forget Fittings',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Henges', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Mali', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'Instrumentationinge',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Sheet & Pa', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'Love Temporate Car',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Bars', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Menu', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'fitainless Steel',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Trankum', grade: '(6)' } ,
    { name: 'Tubing', material: 'Pipes', grade: '(6)' } ,
    { name: 'Tubing', material: 'Alley Stad', grade: '(6)' } ,
    { name: 'Tubing', material: 'Aluminum F22 Pins', grade: '(6)' } ,
    { name: 'Tubing', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Tubing', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Tubing', material: 'A Pres', grade: '(6)' } ,
    { name: 'Tubing', material: 'Forget Fittings', grade: '(6)' } ,
    { name: 'Tubing', material: 'Henges', grade: '(6)' } ,
    { name: 'Tubing', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Tubing', material: 'Mali', grade: '(6)' } ,
    { name: 'Tubing', material: 'Instrumentationinge', grade: '(6)' } ,
    { name: 'Tubing', material: 'Sheet & Pa', grade: '(6)' } ,
    { name: 'Tubing', material: 'Love Temporate Car', grade: '(6)' } ,
    { name: 'Tubing', material: 'Bars', grade: '(6)' } ,
    { name: 'Tubing', material: 'Menu', grade: '(6)' } ,
    { name: 'Tubing', material: 'fitainless Steel', grade: '(6)' } ,
    { name: 'Tubing', material: 'Trankum', grade: '(6)' } ,
    { name: 'Pipes', material: 'Alley Stad', grade: '(6)' } ,
    { name: 'Pipes', material: 'Aluminum F22 Pins', grade: '(6)' } ,
    { name: 'Pipes', material: 'Tubing', grade: '(6)' } ,
    { name: 'Pipes', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Pipes', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Pipes', material: 'A Pres', grade: '(6)' } ,
    { name: 'Pipes', material: 'Forget Fittings', grade: '(6)' } ,
    { name: 'Pipes', material: 'Henges', grade: '(6)' } ,
    { name: 'Pipes', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Pipes', material: 'Mali', grade: '(6)' } ,
    { name: 'Pipes', material: 'Instrumentationinge', grade: '(6)' } ,
    { name: 'Pipes', material: 'Sheet & Pa', grade: '(6)' } ,
    { name: 'Pipes', material: 'Love Temporate Car', grade: '(6)' } ,
    { name: 'Pipes', material: 'Bars', grade: '(6)' } ,
    { name: 'Pipes', material: 'Menu', grade: '(6)' } ,
    { name: 'Pipes', material: 'fitainless Steel', grade: '(6)' } ,
    { name: 'Pipes', material: 'Trankum', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Pipes', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Aluminum F22 Pins', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Tubing', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'A Pres', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Forget Fittings', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Henges', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Mali', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Instrumentationinge', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Sheet & Pa', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Love Temporate Car', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Bars', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Menu', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'fitainless Steel', grade: '(6)' } ,
    { name: 'Alley Stad', material: 'Trankum', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Pipes', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Alley Stad', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Tubing', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'A Pres', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'Forget Fittings',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Henges', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Dustles Seve', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Mali', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'Instrumentationinge',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Sheet & Pa', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'Love Temporate Car',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Bars', grade: '(6)' } ,
    { name: 'Aluminum F22 Pins', material: 'Menu', grade: '(6)' } ,
    {
      name: 'Aluminum F22 Pins',
      material: 'fitainless Steel',
      grade: '(6)'
    } ,
    { name: 'Aluminum F22 Pins', material: 'Trankum', grade: '(6)' } ,
    { name: 'Tubing', material: 'Pipes', grade: '(6)' } ,
    { name: 'Tubing', material: 'Alley Stad', grade: '(6)' } ,
    { name: 'Tubing', material: 'Aluminum F22 Pins', grade: '(6)' } ,
    { name: 'Tubing', material: 'Fique Firrings', grade: '(6)' } ,
    { name: 'Tubing', material: 'apper Nickel', grade: '(6)' } ,
    { name: 'Tubing', material: 'A Pres', grade: '(6)' } ,
    { name: 'Tubing', material: 'Forget Fittings', grade: '(6)' } ,
    { name: 'Tubing', material: 'Henges', grade: '(6)' } ,
    { name: 'Tubing', material: 'Dustles Seve', grade: '(6)' } 
];

// Repeat the process to fill up the array to 400 products
// for (let i = 0; i < 400; i++) {
//     const product = {
//         name: products[i % products.length].name,
//         material: products[i % products.length].material,
//         grade: products[i % products.length].grade
//     };
//     console.log(product, ",");
// }
let o={}
for (let i = 0; i < products.length; i++) {
      // console.log(`{"name":"${products[i].name}", "material": "${products[i].material}","Length":"6-12 meter","Shape": "Round....", "Price":"350/KG", "grade":"${products[i].grade}" } ,`);
 
//  if(o[products[i].name]===undefined){
//   o[products[i].name]=0
//  } o[products[i].name]++;

//  if(o[products[i].material]===undefined){
//   o[products[i].material]=0
//  } o[products[i].material]++;
}
// console.log(o)
// let c=0;
// for(let k in o){
//   console.log(`<option value="${k}">${k} ${o[k]}</option>`)
//   c++;
// }
// for(let i=0;i<=c;i++){
//   console.log(`<option value="${i}">${i}</option>`)
// }