import ContentBox from "@/shared/ui/content/ContentBox";
import ContentWrapper from "@/shared/ui/content/ContentWrapper";

import { projects } from "@/entities/data/project";
import { skillCategories } from "@/entities/data/skill";

export default function Home() {
  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900" />

        <ContentBox>
          <ContentWrapper className="py-60 md:py-100 relative z-10">
            <div className="space-y-16 md:space-y-24 text-white">
              <div className="space-y-8 md:space-y-12">
                <p className="font-mono text-12 md:text-14 tracking-widest uppercase">
                  Developer
                </p>
                <h1 className="text-[24px] md:text-[32px] font-bold">
                  안녕하세요,
                  <br />
                  <span className="text-white">강순철</span>입니다.
                </h1>
              </div>
              <p className="text-[14px] md:text-[18px] text-slate-300 max-w-600 leading-relaxed">
                React/React Native 기반 모바일 및 웹 애플리케이션 개발과
                Node.js, Python 백엔드 시스템 구축에 전문성을 갖춘 개발자입니다.
              </p>
              <div className="flex gap-8 md:gap-12 flex-wrap">
                {["React", "Next.js", "NestJS", "FastAPI", "React Native"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-12 md:px-16 py-6 md:py-8 bg-white/10 backdrop-blur-sm rounded-full text-12 md:text-14 text-white border border-white/10"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </ContentWrapper>
        </ContentBox>
      </div>

      {/* Skills Section */}
      <div className="bg-white dark:bg-slate-900">
        <ContentBox>
          <ContentWrapper className="py-48 md:py-80">
            <h2 className="text-[24px] md:text-[32px] font-bold mb-32 md:mb-48 text-center">
              기술 스택
            </h2>
            <div className="border border-slate-300 dark:border-slate-600 rounded-8 divide-y divide-slate-300 dark:divide-slate-600">
              {skillCategories.map((cat) => (
                <div key={cat.category} className="flex flex-col md:flex-row">
                  <div className="w-full md:w-180 shrink-0 px-16 md:px-20 py-12 md:py-16 bg-slate-100 dark:bg-slate-800 md:border-r border-b md:border-b-0 border-slate-300 dark:border-slate-600">
                    <span className="text-14 md:text-15 font-semibold text-slate-700 dark:text-slate-200">
                      {cat.category}
                    </span>
                  </div>
                  <div className="flex-1 px-16 md:px-20 py-12 md:py-16">
                    <div className="flex flex-wrap gap-6 md:gap-8">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-10 md:px-12 py-4 md:py-6 bg-slate-100 dark:bg-slate-700 rounded-6 text-12 md:text-13 text-slate-700 dark:text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ContentWrapper>
        </ContentBox>
      </div>

      {/* Projects Section */}
      <div className="bg-slate-50 dark:bg-slate-950">
        <ContentBox>
          <ContentWrapper className="py-48 md:py-80">
            <h2 className="text-[24px] md:text-[32px] font-bold mb-32 md:mb-48 text-center">
              프로젝트
            </h2>
            <div className="space-y-24 md:space-y-32">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="border border-slate-300 dark:border-slate-600 rounded-8 overflow-hidden bg-white dark:bg-slate-900"
                >
                  {/* 프로젝트 제목 헤더 */}
                  <div className="px-16 md:px-24 py-12 md:py-16 bg-slate-100 dark:bg-slate-800 border-b border-slate-300 dark:border-slate-600">
                    <div className="flex items-center gap-8 md:gap-12">
                      <span className="text-14 md:text-16 font-bold text-slate-400 dark:text-slate-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-16 md:text-20 font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* 키:값 구조 */}
                  <div className="divide-y divide-slate-200 dark:divide-slate-700">
                    {/* 기간 */}
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-120 shrink-0 px-16 md:px-24 py-10 md:py-14 bg-slate-50 dark:bg-slate-800/50 md:border-r border-b md:border-b-0 border-slate-200 dark:border-slate-700">
                        <span className="text-12 md:text-14 font-medium text-slate-600 dark:text-slate-400">
                          기간
                        </span>
                      </div>
                      <div className="flex-1 px-16 md:px-24 py-10 md:py-14">
                        <span className="text-13 md:text-14 text-slate-800 dark:text-slate-200">
                          {project.period}
                        </span>
                      </div>
                    </div>

                    {/* 역할 */}
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-120 shrink-0 px-16 md:px-24 py-10 md:py-14 bg-slate-50 dark:bg-slate-800/50 md:border-r border-b md:border-b-0 border-slate-200 dark:border-slate-700">
                        <span className="text-12 md:text-14 font-medium text-slate-600 dark:text-slate-400">
                          역할
                        </span>
                      </div>
                      <div className="flex-1 px-16 md:px-24 py-10 md:py-14">
                        <span className="text-13 md:text-14 text-slate-800 dark:text-slate-200">
                          {project.role}
                        </span>
                      </div>
                    </div>

                    {/* 기술스택 */}
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-120 shrink-0 px-16 md:px-24 py-10 md:py-14 bg-slate-50 dark:bg-slate-800/50 md:border-r border-b md:border-b-0 border-slate-200 dark:border-slate-700">
                        <span className="text-12 md:text-14 font-medium text-slate-600 dark:text-slate-400">
                          기술스택
                        </span>
                      </div>
                      <div className="flex-1 px-16 md:px-24 py-10 md:py-14">
                        <div className="flex flex-wrap gap-4 md:gap-6">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-8 md:px-10 py-3 md:py-4 bg-slate-100 dark:bg-slate-700 rounded-4 text-11 md:text-12 text-slate-600 dark:text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 주요 성과 */}
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-120 shrink-0 px-16 md:px-24 py-10 md:py-14 bg-slate-50 dark:bg-slate-800/50 md:border-r border-b md:border-b-0 border-slate-200 dark:border-slate-700">
                        <span className="text-12 md:text-14 font-medium text-slate-600 dark:text-slate-400">
                          주요 성과
                        </span>
                      </div>
                      <div className="flex-1 px-16 md:px-24 py-10 md:py-14">
                        <ul className="space-y-4 md:space-y-6">
                          {project.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-6 md:gap-8 text-13 md:text-14 text-slate-700 dark:text-slate-300"
                            >
                              <span className="text-slate-400 text-6">●</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </ContentWrapper>
        </ContentBox>
      </div>
    </section>
  );
}
