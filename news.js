const researchNews = [
  [
    "2026-11-18",
    "Preprint",
    "VideoACE",
    "A benchmark for agents that inspect high-frame-rate actions in video.",
    "https://arxiv.org/abs/2611.24184"
  ],
  [
    "2026-11-16",
    "Preprint",
    "VideoNexus",
    "Perception agents return time-stamped audiovisual evidence to a long-video reasoning agent.",
    "https://arxiv.org/abs/2611.21392"
  ],
  [
    "2026-11-11",
    "Preprint",
    "VibePrevisBench",
    "A benchmark for coding agents that build and render 4D scenes in Blender.",
    "https://arxiv.org/abs/2611.15789"
  ],
  [
    "2026-11-09",
    "ACM MM 2026",
    "Streaming-o1",
    "Published in the ACM Multimedia proceedings. The model adapts its reasoning depth as a video unfolds.",
    "https://doi.org/10.1145/3767308.3836247"
  ],
  [
    "2026-11-04",
    "Preprint",
    "LooM",
    "Looped decoder layers reuse memory across repeated computation.",
    "https://arxiv.org/abs/2611.06835"
  ],
  [
    "2026-10-30",
    "Open-source release",
    "VibeVideoBench",
    "Released the dataset, evaluation rubric and evaluation code.",
    "https://github.com/vibevideobench/VibeVideoBench#-news-"
  ],
  [
    "2026-09",
    "NeurIPS 2026",
    "SpatialFlow-GRPO and DELTAVID",
    "Both papers were accepted, covering spatial credit assignment for image editing and fine-grained video perception.",
    "https://neurips.cc/Downloads/2026"
  ],
  [
    "2026-07",
    "ICML 2026",
    "SpatialReward and VideoTemp-o3",
    "The proceedings include our work on spatial rewards for image editing and temporal evidence for video reasoning.",
    "https://proceedings.mlr.press/v306/"
  ],
  [
    "2025-08",
    "KDD 2025",
    "KuaiMod",
    "Received the Best Paper Award Honorable Mention in the Applied Data Science Track.",
    "https://www.kdd.org/awards/view/2025-sigkdd-best-paper-award-winners"
  ]
];
// Edit the events above. Dates can be YYYY-MM or YYYY-MM-DD.
{
  const events = [...researchNews].sort((a, b) => b[0].localeCompare(a[0]));
  const section = document.getElementById('news');
  function draw(list, items) {
    const fragment = document.createDocumentFragment();
    for (const [stamp, tag, name, description, source] of items) {
      const date = new Date((stamp.length === 7 ? stamp + '-01' : stamp) + 'T12:00:00Z');
      const time = document.createElement('time');
      time.dateTime = stamp;
      time.textContent = date.toLocaleDateString('en-GB', {timeZone:'UTC',year:'numeric',month:'short',day:stamp.length === 10 ? '2-digit' : undefined});
      const row = document.createElement('li');
      const body = document.createElement('div');
      const kind = document.createElement('span');
      kind.className = 'news-tag'; kind.textContent = tag;
      const title = document.createElement('a');
      title.className = 'news-link'; title.href = source; title.textContent = name;
      body.append(kind, title, ' — '+description);
      row.append(time, body); fragment.append(row);
    }
    list.replaceChildren(fragment);
  }
  const lists = section.querySelectorAll('.news-list');
  draw(lists[0], events.slice(0, 4));
  draw(lists[1], events.slice(4));
  section.querySelector('details').hidden = events.length <= 4;
}
