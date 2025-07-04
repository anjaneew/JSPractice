//Number Sorter
//
const sortButton = document.getElementById("sort");

const sortInputArray = (event) =>{
    event.preventDefault();
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) =>  Number(dropdown.value));
    //[...document] turned it into an array

    // const sortedValues = bubbleSort(inputValues);
    // const sortedValues = selectionSort(inputValues);
    // const sortedValues = insertionSort(inputValues);

    const sortedValues = inputValues.sort((a,b) => {
        return a - b; 
    });

    updateUI(sortedValues);
    // console.log(inputValues);
};

const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });

};

const bubbleSort = (array) => {
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            console.log(array, array[j], array[j+1]);
            if(array[j]>array[j+1]){
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
    }
    }

    return array;
};

const selectionSort = (array) =>{
    for(let i = 0; i < array.length ; i++){
        let minIndex = i;
        for(let j = i+1; j < array.length ; j++){
            console.log(array, array[j], array[minIndex]);
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }

    return array;
};

const insertionSort = (array) => {
    for(let i = 1 ; i < array.length ; i++){
        const currValue = array[i];
        let j = i - 1;
        while( j >= 0 && array[j] > currValue ){
            array[j+1] = array[j];

            j--;
        }

         array[j+1] = currValue;
    }
    return array;
};

sortButton.addEventListener("click", sortInputArray);


