import RecipeCard from "@/components/ui/RecipeCard";
import { Metadata } from "next";
import { FC } from "react";

/**
 * ==> props interface
 */
interface IProps {

}
export const metadata: Metadata = {
  title: "Tastebite - recipes",
};
/**
 * ==> Component
 */
const page: FC<IProps> = ({  }) => {
  return (
    <>
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
        </div>
      </div>
    </section>
    </>
  );
}

export default page;