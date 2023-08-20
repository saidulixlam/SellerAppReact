const SumDisplay = (props) => {
    const list=props.list;
    function getSum() {
        let sum = 0;
        list.forEach(element => {
            sum += Number(element.price);
        });
        return sum;
    }
    return ( 
        <div>
                {getSum()}
        </div>
     );
}
 
export default SumDisplay;