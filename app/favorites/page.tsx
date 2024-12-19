import PageHeading from '@/components/ui/PageHeading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tastebite - favorites'
};
/**
 * ==> Component
 */
const page = ({}) => {
  return (
    <>
      <section>
        <div className="container">
          <PageHeading title="favorites" />
        </div>
      </section>
    </>
  );
};

export default page;
