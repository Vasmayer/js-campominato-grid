/* L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata 
una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

/* console.log('JS OK'); */

/* FUNCTIONS */

const getRandomNumber = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getUniqueRandomNumber = (min,max,listNumbers) =>
{ let rdnNumber;
    do{
        rdnNumber = getRandomNumber(min,max);
    }while(listNumbers.includes(rdnNumber))

     console.table(listNumbers);

    return rdnNumber;

    
}
const createGrid = (columns,gridElement,list) => 
{
    let rdnNumber;

        for(let j = 0 ; j < columns*columns ; j++)
        {
            let cell = document.createElement('div');
            const dimensions = `calc( 100% / ${columns}`
            cell.style.width = dimensions;
            cell.style.height = dimensions;
            cell.className = 'cells';
            rdnNumber  = getUniqueRandomNumber(1,columns * columns,list);
            console.table(list);
            list.push(rdnNumber);
            console.log(rdnNumber);
            cell.innerText = rdnNumber; 
            cell.addEventListener('click',() => {
            
                cell.classList.toggle('clicked');
            
            });
            gridElement.appendChild(cell);

        }
} 


/* RECUPERO GLI ELEMENTI DAL DOM E CREO LE VARIABILI CHE MI SERVONO */
const selectElement = document.getElementById('select');


selectElement.addEventListener('change',(e) => {

    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = '';
    const selectValue = e.target.value;
    const listRdnNumbers = []; 


    if(selectValue)
    {
        console.log(selectValue)

        switch(selectValue)
        {
            case '1':
                /* 10 X 10 */
                createGrid(10,gridElement,listRdnNumbers);

            break;

            case '2':
                /* 9 X 9 */
                createGrid(9,gridElement,listRdnNumbers);

            break;

            case '3':
                /* 7 X 7 */
                createGrid(7,gridElement,listRdnNumbers);

            break;
        }
    }
        
    


});