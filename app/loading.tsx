import Loader from '@/components/ui/Loader';

/**
 * ==> Component
 */
const loading = () => {
  return (
    <>
      <section className="p-0  inset-y-0 inset-x-0 w-screen loader overflow-hidden bg-white z-[99999999999999999999] ">
        <div className="container h-full w-full grid place-items-center">
          <Loader />
        </div>
      </section>
    </>
  );
};

export default loading;
