import CheckBox from '../../../components/customInputs/CheckBox';
import Hero from '../../../components/heroSection/Hero';
import { useFormik } from 'formik';

const DemoPage = () => {
  const checkboxOptions = [
    { label: 'Investor', position: 1 },
    { label: 'Stakeholder', position: 2 },
  ];
  const formik = useFormik({});
  return (
    <div>
      <Hero mainText={`Get in Touch\nConnect with Us Today`} />

      <section>
        <aside>
          <form onSubmit={formik.handleSubmit}>
            <CheckBox options={checkboxOptions} />
          </form>
        </aside>
      </section>
    </div>
  );
};

export default DemoPage;
