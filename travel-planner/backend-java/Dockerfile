FROM openjdk:17-jdk-slim
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN ./mvnw clean package -DskipTests
CMD ["java", "-jar", "target/travel-planner-0.0.1-SNAPSHOT.jar"]
