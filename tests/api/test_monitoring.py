from backend.api.monitoring import heartbeat


def testheartbeat():
    beat = heartbeat()
    assert 200 == beat.status_code
    assert b"<3" == beat.data


def test_get_heartbeat(client):
    response = client.get("/api/monitoring/heartbeat")
    assert response is not None
