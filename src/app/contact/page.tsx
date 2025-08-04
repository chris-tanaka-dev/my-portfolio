import Section from '../../components/common/Section';
import PageWrapper from '../../components/common/PageWrapper';
import ContactInfo from '../../components/features/Contact/ContactInfo';

const Contact = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-24">
        <Section id="contact" title="Contact">
          <ContactInfo />
        </Section>
      </div>
    </PageWrapper>
  );
};

export default Contact;
