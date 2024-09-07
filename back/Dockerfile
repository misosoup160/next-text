FROM ruby:3.3.5
ENV LANG=C.UTF-8 \
  TZ=Asia/Tokyo
WORKDIR /app
RUN apt-get update -qq && apt-get install -y postgresql-client

COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock

RUN bundle install

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

CMD ["rails", "server", "-b", "0.0.0.0"]
