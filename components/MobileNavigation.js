import Link from 'next/link'
import Button from './Button'

const links = [
  {
    href:
      'https://translate.google.com/?hl=zh-TW&tab=TT#view=home&op=translate&sl=auto&tl=zh-CN',
    primary: 'Google翻譯',
    icon: (
      <i className="material-icons inline-block h-6 w-6 -mt-1 mr-3">
        g_translate
      </i>
    ),
  },
  {
    href:
      'https://docs.google.com/spreadsheets/d/1ugnB8DEgdhT5E8YbIidNcF4AI4rObaMCdSjT4qG9lp0/edit#gid=2106039647',
    primary: '日報',
    icon: (
      <i className="material-icons inline-block h-6 w-6 -mt-1 mr-3">today</i>
    ),
  },
  {
    href:
      'https://docs.google.com/document/d/1v-Ttj7IFEgzA0Bo_WclSQp1nc-Ek7GPQrHZCerHK8hM/edit#heading=h.d23ii4u9uy4r',
    primary: '批注詞',
    icon: (
      <i className="material-icons inline-block h-6 w-6 -mt-1 mr-3">
        history_edu
      </i>
    ),
  },
  {
    href:
      'https://docs.google.com/spreadsheets/d/1cCY030BQSbDku2rkaoIjxMFN3U3ePLJSsnWG6qNHR8w/edit#gid=0',
    primary: '數據計算',
    icon: (
      <i className="material-icons inline-block h-6 w-6 -mt-1 mr-3">
        calculate
      </i>
    ),
  },
  {
    href:
      'https://docs.google.com/spreadsheets/d/1rcSdSl6M-ruV4bHOlzOmHvYEJFsbOxRjqVr0KXcQdCc/edit#gid=184557706',
    primary: '篩選總表',
    icon: (
      <i className="material-icons inline-block h-6 w-6 -mt-1 mr-3">
        filter_alt
      </i>
    ),
  },
  {
    href:
      'https://docs.google.com/spreadsheets/d/1_uNZrvOgcgTYnTA97Ygv3jJEAMCkjmTlCd4KWaeb2V8/edit#gid=0',
    primary: '匯入處理',
    icon: (
      <i className="material-icons inline-block h-6 w-6 -mt-1 mr-3">source</i>
    ),
  },
  {
    href:
      'https://docs.google.com/spreadsheets/d/1k9zLpIV5fNq66qujBc8cWxpvCa2nTqWScxlTmowG7Ws',
    primary: '採購部共用',
    icon: (
      <i className="material-icons inline-block h-6 w-6 -mt-1 mr-3">
        folder_shared
      </i>
    ),
  },
  {
    href:
      'https://docs.google.com/spreadsheets/d/1gqruDNC_8Dp3r5BEuD-lDiL8jlvb4rZMfvXWk1hrYHA',
    primary: 'Jayden共用',
    icon: (
      <i className="material-icons inline-block h-6 w-6 -mt-1 mr-3">
        folder_shared{' '}
      </i>
    ),
  },
]

export const MobileNavigation = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col justify-center items-center w-full py-20">
      <nav className="bg-papaer px-4 py-4 rounded mt-4 w-84 mobile-wrap">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center justify-center">
            <i className="text-white text-2xl material-icons">menu</i>
          </div>
          <div
            className="font-bold text-white absolute inset-y-0"
            style={{ left: '50%', transform: 'translateX(-50%)' }}
          >
            Abstract UI
          </div>
          <div className="flex items-center justify-center">
            <i className="bx bxs-envelope text-white text-2xl material-icons">
              mail
            </i>
            <i className="bx bx-trending-up text-white text-2xl ml-6 material-icons">
              trending_up
            </i>
          </div>
        </div>
        <div className="mt-4">
          <input
            type="search"
            id
            name
            placeholder="Search"
            className="bg-white px-4 py-2 w-full rounded"
          />
        </div>
        <div
          className="mt-10"
          style={{ marginLeft: '2.5rem', marginRight: '2.5rem' }}
        >
          <ul className="">
            {links.map(({ href, primary, icon }) => (
              <li key={`${href}${primary}`}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  className="inline-block w-full h-full text-white text-lg py-2 hover:text-gray-500"
                >
                  {icon}
                  {primary}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  </div>
)

export default MobileNavigation
