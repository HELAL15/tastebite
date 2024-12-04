


/**
 * ==> Component
 */
const Newsletter = () => {
  return (
    <>
    <section className="bg-primary-100">
      <div className="container grid place-items-center text-center">
        <div className=" md:w-3/4 lg:w-1/2 md:px-14 lg:px-20 space-y-2">
          <h3 className="text-3xl md:text-4xl xl:text-6xl font-bold px-4 md:px-10">
            Deliciousness to your inbox.
          </h3>
          <p className="text-base font-medium">
            Subscribe to our newsletter and get the latest recipes, tips, and more.
          </p>
          <form action="" className="flex items-stretch overflow-hidden bg-white p-[2px]">
            <input className="input !rounded-none" type="email" name="email" id="" />
            <button className="btn !rounded-none !border-none bg-primary hover:bg-orange-700 text-white">join</button>
          </form>
          <p>by joining you our newsletter you agree to our <span className="border-b border-primary">terms and conditions</span></p>
        </div>
      </div>
    </section>
    </>
  );
}

export default Newsletter;