import { Fragment } from 'react';
import { skeleton } from '../../utils';

const AboutCard = ({
  loading,
  content,
}: {
  loading: boolean;
  content: string;
}) => {
  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="card bg-base-200 shadow-xl border border-base-300">
          <div className="card-body p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center space-x-3">
                {loading ? (
                  skeleton({
                    widthCls: 'w-12',
                    heightCls: 'h-12',
                    className: 'rounded-xl',
                  })
                ) : (
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-2xl" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                      : 'About Me'}
                  </h3>
                </div>
              </div>
            </div>
            <div className="prose max-w-none text-base-content/80 text-sm leading-relaxed">
              {loading ? (
                <div className="space-y-2">
                  {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
                  {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
                  {skeleton({ widthCls: 'w-3/4', heightCls: 'h-4' })}
                </div>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: content }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutCard;
