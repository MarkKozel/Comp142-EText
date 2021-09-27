<template>
  <div class="container">
    <PageTitle class="unitPageTitle">
      <Content slot-key="PageTitle" />
    </PageTitle>

    <Introduction class="unitIntroduction">
      <Content slot-key="Introduction" />
    </Introduction>

    <KeyPoints class="unitKeyPoints">
      <Content slot-key="KeyPoints" />
    </KeyPoints>

    <main>
      <Content />
    </main>

    <Review class="unitReview">
      <Content slot-key="Review" />
    </Review>

    <Summary class="unitSummary">
      <Content slot-key="Summary" />
    </Summary>
  </div>
</template>