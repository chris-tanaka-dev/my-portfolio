import Section from '../../components/common/Section';
import PageWrapper from '../../components/common/PageWrapper';

const Education = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-24">
        <Section id="education" title="Education">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 border border-gray-100 dark:border-gray-700 card-hover animate-scale-in">
              <div className="flex flex-col gap-4 text-gray-700 dark:text-gray-200 animate-fade-in">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
                  <span className="font-bold text-lg text-gray-900 dark:text-white">
                    Master&apos;s degree in Computer Science
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-200 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-700">
                    Apr 2011 - Mar 2013
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
                  <span className="font-bold text-lg text-gray-900 dark:text-white">
                    Bachelor&apos;s degree in Computer Science
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-200 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-700">
                    Apr 2007 - Mar 2011
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </PageWrapper>
  );
};

export default Education;
