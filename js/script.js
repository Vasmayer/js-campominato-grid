/* L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata 
una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

/* console.log('JS OK'); */

/* FUNCTIONS */

const getRandomNumber = (min,max) => Math.floor(Math.random() * (max - min)) + min;
const createGrid = (columns,rows,gridElement) => 
{
    for(let i = 0 ; i < rows ; i++)
    {
        for(let j = 0 ; j < columns ; j++)
        {
            let cell = document.createElement('div');
            cell.style.width = `calc( 100% / ${columns}`;
            cell.style.height = `calc( 100% / ${rows}`;
            cell.className = 'cells';
            cell.innerText = `1`
            gridElement.appendChild(cell);

        }
    }
} 


/* RECUPERO GLI ELEMENTI DAL DOM E CREO LE VARIABILI CHE MI SERVONO */
const selectElement = document.getElementById('select');
const listRdnNumbers = [];

selectElement.addEventListener('change',(e) => {

    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = '';
    const selectValue = e.target.value; 

    if(selectValue)
    {
        console.log(selectValue)

        switch(selectValue)
        {
            case '1':
                /* 10 X 10 */
                createGrid(10,10,gridElement);

            break;

            case '2':
                /* 9 X 9 */
                createGrid(9,9,gridElement);

            break;

            case '3':
                /* 7 X 7 */
                createGrid(7,7,gridElement);

            break;
        }
    }
        
    


});