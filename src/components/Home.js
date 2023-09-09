import React from 'react'

function Home() {
  return (
    <div className='mx-20 px-2'>
      <div className='flex justify-center h-screen'>
        <div className="max-w-m rounded overflow-hidden shadow-lg py-5">
          <div className='text-center'> {/* Center the image */}
            <div className="w-6/12 sm:w-4/12 mx-auto px-4">
              <img src="/images/gigachad.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
            </div>
          </div>

          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2">Chad Giga</div>
            <p className="text-gray-700 text-base">
              Can you hear the silence?
              Can you see the dark?
              Can you fix the broken?
              Can you feel, can you feel my heart?<br/>

              Can you help the hopeless?
              Well, I'm begging on my knees
              Can you save my bastard soul?
              Will you ache for me?<br/>

              I'm sorry brother
              So sorry lover
              Forgive me father
              I love you mother<br/>

              Can you hear the silence?
              Can you see the dark?
              Can you fix the broken?
              Can you feel my heart?
              Can you feel my heart?
              Can you feel my heart?
              Can you feel my heart?<br/>

              I'm scared to get close and I hate being alone
              I long for that feeling to not feel at all
              The higher I get, the lower I'll sink
              I can't drown my demons, they know how to swim
              I'm scared to get close and I hate being alone
              I long for that feeling to not feel at all
              The higher I get, the lower I'll sink
              I can't drown my demons, they know how to swim
              I'm scared to get close and I hate being alone
              I long for that feeling to not feel at all
              The higher I get, the lower I'll sink
              I can't drown my demons, they know how to swim<br/>

              Can you feel my heart?, can you hear the silence?
              Can you see the dark?
              Can you fix the broken?
              Can you feel, can you feel my heart?<br/>
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#giga</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#chad</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#canyoufeelmyheart</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home