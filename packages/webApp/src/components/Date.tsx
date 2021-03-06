import React, { memo } from 'react'
import { useQuery, gql } from '@apollo/client'
import { GetTodayQuery } from '@sprightly/types'

const GET_TODAY = gql`
  query getToday {
    date {
      day
      month
      week_of_year
    }
  }
`
const Date: React.FC = () => {
  const { loading, data, error } = useQuery<GetTodayQuery>(GET_TODAY)
  if (error) return <div>errorr</div>
  if (loading || !data) return <h1>loading</h1>
  return <div>Fetched auth data!</div>
}

export default memo(Date)
