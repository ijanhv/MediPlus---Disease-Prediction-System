const BreastCancerForm = () => {
  return (
    <div>
      <form className='p-10' action=''>
        <p className='text-left text-indigo-900 font-semibold text-4xl my-4'>Enter relevant data for Breast Cancer Prediction</p>
        <div className='grid grid-cols-2 gap-x-10 gap-y-5'>
          <div className='space-y-2'>
            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Item Identifier</label>
              <input className='form-input' type="text" />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Item Weight</label>
              <input className='form-input' type="text" />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Item Fat Content</label>
              <input className='form-input' type="text" />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Item Visibility</label>
              <input className='form-input' type="text" />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Item Type</label>
              <input className='form-input' type="text" />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Item MRP</label>
              <input className='form-input' type="text" />
            </div>
          </div>

          <div className='space-y-2'>
            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Outlet Identifier</label>
              <input className='form-input' type="text" />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Outlet Establishment Year</label>
              <input className='form-input' type="text" />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Outlet Size</label>
              <input className='form-input' type="text" />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Outlet Location Type</label>
              <input className='form-input' type="text" />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Outlet Type</label>
              <input className='form-input' type="text" />
            </div>

          </div>
        </div>

        <button className='bg-indigo-800 px-4 py-3 text-xl ml-60 text-white font-semibold rounded-lg mt-10 w-1/2'>
          Predict
        </button>
      </form>
    </div>
  )
}

export default BreastCancerForm
