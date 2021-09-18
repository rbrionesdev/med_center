import React from 'react'
import SemanticLoader from './SemanticLoader';
import SemanticLoaderError from './SemanticLoaderError';
import useAxiosOnMount from '../hooks/useAxiosOnMount';

export default function ListLoader({ header, renderData, url, errorMessage }) {
  console.log();
  const { data, loading, error } = useAxiosOnMount(url);
  
  const renderList = () => {
    if (loading) return <SemanticLoader />;
    if (error)
      return (
        <SemanticLoaderError
          header={ errorMessage ? errorMessage : "Error Ocurred" }
          error={error}
        />
      );
    return data.map(renderData);
  };

  return (
    <div>
      <h1>{header}</h1>
      {renderList()}
    </div>
  )
}
