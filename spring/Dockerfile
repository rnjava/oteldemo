FROM openjdk:8-jre
RUN mkdir -p /app/bin
COPY ./target/bike-1.0.0.jar /app/bin
COPY ./agent/opentelemetry-javaagent-all.jar /app/bin
CMD java -Dapplication.home=/app/bin/ \
    -Dapplication.name=BikeRegistration \
    -Dotel.trace.exporter=otlp \
    -D-Dotel.exporter.otlp.endpoint=0.0.0.0:4317 \
    -javaagent:/app/bin/opentelemetry-javaagent-all.jar \
    -Dlogging.level.org.springframework.web.filter.CommonsRequestLoggingFilter=DEBUG '-Dlogging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} - %logger{36} - %msg traceID=%X{traceId} %n' \
    -jar \
    /app/bin/bike-1.0.0.jar

