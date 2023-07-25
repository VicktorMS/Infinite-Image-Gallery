import React from 'react'
import ImageCard from './ImageCard'
import { useQueryClient, useQuery } from 'react-query'
import { getPhotosList, printApiKey } from '../service/api'

const GenImages = () => {
  const queryClient = useQueryClient()
  // const { isLoading, error, data, isFetching } = useQuery("repoData", getPhotosList)
  // if(isLoading) return "Loading..."
  // if(error) return "Error fetching" + error.message
  printApiKey()
  return (
    <div>
      <ImageCard/>
    </div>
  )
}

export default GenImages