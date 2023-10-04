const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="md:w-3/12 mx-auto text-center my-12">
      <p className="text-[#D99904] italic mb-4">---{subheading}---</p>
      <h3 className="text-3xl uppercase border-y-2 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
