import Dashboard_2 from '@/assets/images/platform/dashboard_2.webp';
import Dashboard_3 from '@/assets/images/platform/dashboard_3.webp';
import PlatformOptions from '@/components/shared/PlatformOptions';

const FeatureListSection = () => {
  return (
    <section className="lg:py-24 py-12 w-full space-y-[84px]">
      <PlatformOptions
        title="Car Financing"
        subtitle="Dealer Loans"
        description="OneLot's working capital loans allow car dealer to buy more cars and capitalize on car purchase opportunities you would otherwise have missed. We transfer the money to your account within 6 hours."
        bottomText="Use OneLot's financing solution today, grow the number of cars in your lot and increase your profits. "
        actionButton="View Loans"
        actionButtonFn={() => {}}
        platformImg={Dashboard_2.src}
        platformAlt="Car Financing Dashboard Image"
        imgPosition="left"
        featureList={[
          'Interest as low as 1.5% per month with daily calculation of interest',
          'Financing up to 70% of the vehicle purchase',
          'Financing period up to 90 days with flexible repayment schedule as any point',
        ]}
      />
      <PlatformOptions
        title="Dealership Management System"
        description="OneLot's digital platform has been build with the single goal to help used car dealers to operate their business more efficiently."
        bottomText="Sign-up OneLot's dealer platform today, and your car easier. "
        actionButton="Explore now"
        actionButtonFn={() => {}}
        platformImg={Dashboard_3.src}
        platformAlt="Dealership Management System Image"
        imgPosition="right"
        featureList={[
          'Inventory Management: Track all details about your cars and sales in one place - from car details to buyers. All you need to know in one place.',
          'Marketing Tools: Promote your cars across all the different platforms. Write a marketing text and upload on Facebook Marketplace, Groups, Pages, and Instagram with a single click of a button.',
          'Marketing Insights (Coming Soon): Get insights on prices and volumes for all cars in the market. We provide you with all the data by combining data from various sources with a single click of a button.',
        ]}
      />
    </section>
  );
};

export default FeatureListSection;
