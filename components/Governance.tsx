import React from 'react'
import { builder } from '@builder.io/react';
import styled from 'styled-components';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function Governance() {
  const [board, setBoard] = React.useState<any>(null);
  const [committees, setCommittees] = React.useState<any>(null)

  React.useEffect(() => {
    builder.getAll('board-of-directors').then((data) => {
      setBoard(data);
    })
    builder.getAll('committees').then((data) => {
      setCommittees(data)
    })
  }, []);
  return (
    <div>

      {/* Board of Directors */}
      <div className="mb-36">
        <h3 className='mb-12'>Board of Directors</h3>
        <Grid>
          {
            board?.map((item: any, index: number) => (
              <TeamItem key={index}>
                <div className='bg-gray-200'>
                  <img src={item.data.image} alt={item.data.name} className='object-cover' />
                </div>
                <div className='p-6'>
                  <div className="text-[14px] text-gray-500 mb-4">{item.data.designation}</div>
                  <div className='text-lg font-semibold mb-4'>{item.data.name}</div>
                </div>
              </TeamItem>
            ))
          }
        </Grid>
      </div>

      {/* Committees */}
      <div>
        <h3 className='mb-12'>Committees</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {
            committees?.map((committee: any, i: number) => (
              <CommitteeCard key={committee.id}>
                <div className='text-lg font-semibold mb-8'>{committee.name}</div>
                {
                  committee.data.members?.map((member: any) => (
                    <div className='text-sm mb-4' key={member.id}>
                      {member.name} - {member.designation}
                    </div>
                  ))
                }
              </CommitteeCard>
            )) 
          }
        </div>
      </div>

    </div>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
`

const TeamItem = styled.div`
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 4px 16px 0px rgba(168, 161, 125, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.13);
`

const CommitteeCard = styled.div`
  padding: 24px 24px 32px 24px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 16px;
`