package org.opentelemetry.bike.repositories;

import org.opentelemetry.bike.models.Bike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BikeRepository extends JpaRepository<Bike, Long> {

}
