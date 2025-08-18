import React from 'react'

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-8">
        REFUND POLICY
      </h1>

      {/* Cancellation by Student */}
      <h2 className="text-xl font-semibold mb-4">CANCELLATION BY STUDENT</h2>
      <p className="mb-4">
        In no event will the participants be eligible for the refund of program
        fee, once the registration for the course is completed.
      </p>
      <p className="mb-4">
        If the request for withdrawal and/or cancellation is received within 15
        working days from the date of registration of the course, 50% of the
        Course Fee will be deducted towards administration and cancellation
        charges and the remaining amount may be refunded.
      </p>
      <p className="mb-4">
        If the request for withdrawal and/or cancellation is received more than
        15 working days from the date of registration, the student will forfeit
        the full examination fee and no refunds will be made available to the
        student.
      </p>
      <p className="mb-6">
        If the student withdraws or drops out from the course due to any
        accident, requests for partial refunds will be considered or processed.
      </p>

      {/* Cancellation by Vedubuild */}
      <h2 className="text-xl font-semibold mb-4">
        CANCELLATION BY VEDUBUILD and ASSOCIATES
      </h2>
      <p className="mb-4">
        VEDUBUILD and ASSOCIATES, reserves the right to cancel course at any
        time owing to reasons like insufficient enrolments or force majeure
        events.
      </p>
      <p>
        If the event that VEDUBUILD and ASSOCIATES cancels a scheduled
        examination, the student will receive full fee refund for the same. All
        refunds will be processed within 45 days of receipt of a valid refund
        request.
      </p>
    </div>
  )
}

export default RefundPolicy
