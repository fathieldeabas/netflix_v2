import a1 from './a1.png';
// import chord from './chord.mp4';

export const Image = ()=>{
    return(
        <>
        <div className='text-center'>
        <h3>This is simage div</h3>
         <img src={a1} alt="" width='1000px' className='m-2'/>
         {/* <video src={chord} controls autoPlay className='m-2' width='1000'></video> */}
        </div>
        </>

    )
}