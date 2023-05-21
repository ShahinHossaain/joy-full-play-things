import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MathCategoryToys from "../MathCategoryToys/MathCategoryToys";
import LanguageCategoryToys from "../LanguageCategoryToys/LanguageCategoryToys";
import EngineeringCategoryToys from "../EngineeringCategoryToys/EngineeringCategoryToys";
import ScienceCategoryToys from "../ScienceCategoryToys/ScienceCategoryToys";

const ToyCategories = () => {
  return (
    <div className="text-center mt-32">
      <Tabs>
        <TabList>
          <Tab>Math Toys</Tab>
          <Tab>Engineering toys</Tab>
          <Tab> Science Toys</Tab>
          <Tab>Language Toys</Tab>
        </TabList>

        <TabPanel>
          <MathCategoryToys></MathCategoryToys>
        </TabPanel>
        <TabPanel>
          <EngineeringCategoryToys></EngineeringCategoryToys>
        </TabPanel>
        <TabPanel>
          <ScienceCategoryToys></ScienceCategoryToys>
        </TabPanel>
        <TabPanel>
          <LanguageCategoryToys></LanguageCategoryToys>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ToyCategories;
