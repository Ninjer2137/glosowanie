function prepareData(data1, data2, data3){
  return [
    data1.split(';')[0],
    data2.split(';')[0], 
    data3.split(';')[0]
  ]
}

async function wykres(){
  const newdata1 = await fetch("http://localhost:3000/selectkandyvote1");
  const newdata2 = await fetch("http://localhost:3000/selectkandyvote2");
  const newdata3 = await fetch("http://localhost:3000/selectkandyvote3");

  const data = prepareData(
    await newdata1.text(),
    await newdata2.text(),
    await newdata3.text()
  )

  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Kandydat 1','Kandydat 2','Kandydat 3'],
      datasets: [{
        label: 'Ilość Głosów',
        data: data,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });  
}

wykres();