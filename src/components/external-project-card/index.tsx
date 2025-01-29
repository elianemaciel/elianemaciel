import { Fragment } from 'react';
import LazyImage from '../lazy-image';
import { ga, skeleton } from '../../utils';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

const ExternalProjectCard = ({
  externalProjects,
  header,
  loading,
  googleAnalyticId,
}: {
  externalProjects: SanitizedExternalProject[];
  header: string;
  loading: boolean;
  googleAnalyticId?: string;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < externalProjects.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div className="avatar w-full h-full">
                      <div className="w-24 h-24 mask mask-squircle mx-auto">
                        {skeleton({
                          widthCls: 'w-full',
                          heightCls: 'h-full',
                          shape: '',
                        })}
                      </div>
                    </div>
                    <div className="mt-2">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                    <div className="mt-2 flex items-center flex-wrap justify-center">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderExternalProjects = () => {
    return externalProjects.map((item, index) => (
      <div className="card shadow-lg compact bg-base-100 p-8 h-full w-full" key={index}>
        <div className="flex items-center flex-col">
          <div className="w-full">
            <div className="px-4">
              <div className="text-center w-full">
                <h2 className="font-medium text-center opacity-60 mb-2">
                  {item.title}
                </h2>
                {item.imageUrl && (
                  <div className="avatar opacity-90">
                    <div className="w-52 h-52 mask mask-squircle">
                      <LazyImage
                        src={item.imageUrl}
                        alt={'thumbnail'}
                        style={{ objectFit: 'contain' }}
                        placeholder={skeleton({
                          widthCls: 'w-full',
                          heightCls: 'h-full',
                          shape: '',
                        })}
                      />
                    </div>
                  </div>
                )}
                <p className="mt-2 text-base-content text-opacity-60 text-sm text-justify">
                  {item.description}
                </p>
                <p className="mt-4">
                  <strong>Tecnologias</strong>
                </p>
                <div className="mt-4 flex items-center flex-wrap justify-center">
                  {item.tech.map((category, index2) => (
                    <div
                      className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content"
                      key={index2}
                    >
                      {category}
                    </div>
                  ))}
                </div>
                {item?.link && (
                  <>
                    <p className="mt-4">
                      <strong>Link</strong>
                    </p>
                    <div className="mt-4 flex items-center flex-wrap justify-center">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.link}
                      </a>
                    </div>
                  </>
                )}
                {item?.repository && (
                  <>
                    <p className="mt-4">
                      <strong>Repositório</strong>
                    </p>
                    <div className="mt-4 flex items-center flex-wrap justify-center">
                      <a
                        href={item.repository}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.repository}
                      </a>
                    </div>
                  </>
                )}
                <p className="mt-4">
                  <strong>Funções</strong>
                </p>
                <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                  {item.function.map((category, index2) => (
                    <div
                      className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content"
                      key={index2}
                    >
                      {category}
                    </div>
                  ))}
                </div>
                {item?.results && (
                  <>
                    <p className="mt-4">
                      <strong>Contribuições e Resultados</strong>
                    </p>
                    <ul
                      style={{ listStyle: 'disc' }}
                      className="mt-2 text-base-content text-opacity-60 text-sm text-justify"
                    >
                      {item?.results.map((i, index) => (
                        <li key={index}>{i}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        {header}
                      </span>
                    )}
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading ? renderSkeleton() : renderExternalProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExternalProjectCard;
