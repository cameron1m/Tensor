function setup(){
    const values = [];
    for(let i = 0; i < 15; i++){
        values[i] = Math.random()*100;
    }
    const shape = [5,3];



    const data = tf.tensor(values, shape)

    console.log(data.toString());
    // console.log(data);
}
setup();