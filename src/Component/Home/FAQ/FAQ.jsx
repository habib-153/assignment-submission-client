import img from "./FAQ.webp";
const FAQ = () => {
  return (
    <div className="mt-4 md:mt-12">
        <h2 className="text-4xl my-4 text-center font-semibold">Frequently <span className="text-[#1eb123f9]">Asked</span> Questions</h2>
    <div className="flex items-center justify-between gap-4 flex-col md:flex-row">
      <div className="flex-1">
        <img className="w-full rounded-xl" src={img} alt="" />
      </div>
      <div className="flex-1 space-y-4">
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3"  />
          <div className="collapse-title text-xl font-medium">
          What is online study and how does it work?
          </div>
          <div className="collapse-content">
            <p>Online study is a way of learning from anywhere, anytime, and at your own pace. You can access a variety of courses and programs offered by accredited institutions and organizations, and learn from qualified instructors and experts.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          What are the benefits of online study?
          </div>
          <div className="collapse-content">
            <p>Online study offers many benefits, such as Flexibility and convenience: You can choose when and where to study, and fit your learning around your personal and professional commitments.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          How can I enroll in an online course or program?
          </div>
          <div className="collapse-content">
            <p>To enroll in an online course or program, you will need to:
            <li>Browse our website and find the course or program that suits your interests, goals, and needs.</li>
<li>Check the eligibility criteria, admission requirements, and fees for the course or program.</li>
<li>Fill out the online application form and provide the necessary documents and information.</li>
<li>Wait for the confirmation email and follow the instructions to complete your enrollment and payment.</li>
<li>Access the LMS and start your online learning journey.</li></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQ;
