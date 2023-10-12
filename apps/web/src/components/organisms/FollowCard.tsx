import { FC } from 'react'
import Image from 'next/image'
import { FollowButton } from './FollowButton'
import {
  FollowInfoFragment,
  FollowedByMeQuery,
} from '@krowdforce/network/src/generated'
import { Title2 } from '../atoms/typography'

export const FollowCard: FC<{
  followInfo: FollowInfoFragment
}> = ({ followInfo }) => {
  return (
    <div>
      <div className="flex gap-2">
        <Image
          src={followInfo.image || ''}
          width={300}
          height={300}
          alt=""
          className="rounded h-20 w-20"
        />
        <div>
          <Title2>{followInfo.name}</Title2>
          <FollowButton followingId={followInfo.uid} />
        </div>
      </div>
    </div>
  )
}
